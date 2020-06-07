import './style.css';

// import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';
import { Button, Col, Empty, Icon, Popconfirm, Row, Table, message } from 'antd';
import { FormattedHTMLMessage, FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
/**
 *
 * Sois
 *
 */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import makeSelectSois from './selectors';
// import reducer from './reducer';
// import saga from './saga';
// import messages fro../../locales/en-US/containers/Soisois';
// import commonMessages from '../../locales/en-US/globalMessages';
import TimeAgo from 'react-timeago';
// import { connect } from 'react-redux';
import { connect } from 'dva';
import dayjs from 'dayjs';
import styled from 'styled-components';
import SOIsSkeleton from './SOIsSkeleton';
import RegisterSoiForm from './RegisterSoiForm';
import { refreshSOIs, refreshSOIsFail, refreshSOIsSuccess } from './actions';
import { deleteASOIAPI, getSOIs, pingSOIAPI } from '../../apis/sois';

// import DiaPageHeader from '../../components/Common';

const EmptyContainer = styled.div`
  padding: 100px 0;
`;

const actionButtonStyle = {
  margin: '0 10px 0 0',
};

export class SoisNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingData: true,
      selectedRowKeys: [],
      drawerVisiable: false,
      selectedSOI: undefined,
    };
  }

  onRegisterSOI() {
    this.setState({
      drawerVisiable: true,
      selectedSOI: undefined,
    });
  }

  onShowDrawer(soi) {
    this.setState({
      drawerVisiable: true,
      selectedSOI: soi,
    });
  }

  onCloseDrawer() {
    this.setState({
      drawerVisiable: false,
      selectedSOI: undefined,
    });
  }

  onPreventShowDrawer(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDeleteASOI(record, event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(`onDeleteASOI: `, record);
    deleteASOIAPI(record.globalId).then(
      () => {
        this.props.dispatch(refreshSOIs());
        const msg = formatMessage({ id: 'app.containers.Sois.deleteSOISuccessful' });
        message.success(msg);
      },
      err => {
        message.error(err);
      },
    );
  }

  onPingSOI(record, event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(`onDeleteASOI: `, record);
    pingSOIAPI(record.globalId).then(
      () => {
        this.props.dispatch(refreshSOIs());
        const msg = formatMessage({ id: 'app.containers.Sois.pingSuccessful' });
        message.success(msg);
      },
      err => {
        message.error(err);
      },
    );
  }

  onClickCancel(record, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('onClickCancel: ', record);
  }

  onClickDelete(record, event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(record);
  }

  initSoisData() {
    this.setState({
      loadingData: true,
    });
    getSOIs().then(
      sois => {
        this.setState({
          loadingData: true,
        });
        // add key to sois
        // sois = sois.map((item, index) => {
        //   item.key = item._id || index;
        //   return item;
        // });
        this.props.dispatch(refreshSOIsSuccess(sois));
      },
      err => {
        this.setState({
          loadingData: true,
        });
        this.props.dispatch(refreshSOIsFail(err));
      },
    );
  }

  componentDidMount() {
    this.initSoisData();
  }

  render() {
    const { loadingData, drawerVisiable, selectedSOI, selectedRowKeys } = this.state;
    const sois = this.props.soisData.data;
    const modified = this.props.soisData.modifiedAt;
    let content = <SOIsSkeleton />;

    const columns = [
      {
        title: formatMessage({ id: 'app.containers.Sois.soiName' }),
        dataIndex: 'name',
      },
      {
        title: formatMessage({ id: 'app.containers.Sois.baseURL' }),
        dataIndex: 'baseURL',
      },
      {
        title: formatMessage({ id: 'app.containers.Sois.status' }),
        dataIndex: 'system.state',
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => (
          <div
            onClick={e => {
              this.onPreventShowDrawer(e);
            }}
          >
            <Button
              size="small"
              style={actionButtonStyle}
              title={formatMessage({ id: 'app.containers.Sois.pingDescription' })}
              onClick={e => {
                this.onPingSOI(record, e);
              }}
            >
              {formatMessage({ id: 'app.containers.Sois.ping' })}
            </Button>
            <Popconfirm
              style={{ maxWidth: '300px' }}
              title={formatMessage({ id: 'app.containers.Sois.deleteSOIDescription' })}
              onConfirm={e => {
                this.onDeleteASOI(record, e);
              }}
              onCancel={e => {
                this.onClickCancel(record, e);
              }}
              okText={formatMessage({ id: 'app.common.messages.yes' })}
              cancelText={formatMessage({ id: 'app.common.messages.no' })}
            >
              <Button
                size="small"
                style={actionButtonStyle}
                onClick={e => {
                  this.onClickDelete(record, e);
                }}
              >
                {formatMessage({ id: 'app.common.messages.delete' })}
              </Button>
            </Popconfirm>
          </div>
        ),
      },
    ];

    if (loadingData) {
      if (!sois || !sois.length) {
        content = (
          <EmptyContainer>
            <Empty
              description={
                <span>
                  <FormattedHTMLMessage id="app.containers.Sois.emptySOIs" />
                </span>
              }
            >
              <Button
                type="primary"
                onClick={() => {
                  this.onRegisterSOI();
                }}
              >
                {formatMessage({ id: 'app.containers.Sois.registerNow' })}
              </Button>
            </Empty>
          </EmptyContainer>
        );
      } else {
        content = (
          <div className="sois-table-container">
            <div>
              <div style={{ paddingBottom: '15px' }}>
                <Row>
                  <Col span={14}>
                    <Button
                      onClick={() => {
                        this.onRegisterSOI();
                      }}
                      type="primary"
                    >
                      {formatMessage({ id: 'app.containers.Sois.registerNow' })}
                    </Button>
                  </Col>
                  <Col span={10} style={{ textAlign: 'right' }}>
                    <Button
                      type="link"
                      onClick={() => this.initSoisData()}
                      // disabled={loadingIntelligencesData}
                    >
                      {/* {dayjs(modified).format('YYYY/MM/DD HH:mm:ss')} */}
                      <TimeAgo date={modified} />
                      <Icon
                        type="sync"
                        style={{ verticalAlign: 'middle', marginLeft: '5px' }}
                        // spin={loadingIntelligencesData}
                      />
                    </Button>
                  </Col>
                </Row>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <Table
                  bordered
                  pagination={false}
                  rowClassName={record => {
                    let selected = false;
                    selectedRowKeys.forEach(item => {
                      if (item === record._id) {
                        selected = true;
                      }
                    });
                    if (selected) {
                      return 'selected-row';
                    }
                    return '';
                  }}
                  columns={columns}
                  rowSelection={{
                    selectedRowKeys,
                    type: 'radio',
                    onSelect: record => {
                      // console.log('rowSelection onSelect: ', record);
                      // setSelectedRowKeys([record._id]);
                      this.setState({
                        selectedRowKeys: [record._id],
                      });
                      this.onShowDrawer(record);
                    },
                  }}
                  dataSource={sois}
                  rowKey={record => record._id}
                  onRow={record => ({
                    onClick: () => {
                      // console.log('onRow->onClick: ', record);
                      // this.selectRow(record);
                      // setSelectedRowKeys([record._id]);
                      this.setState({
                        selectedRowKeys: [record._id],
                      });
                      this.onShowDrawer(record);
                    },
                  })}
                />
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div style={{ padding: '20px' }}>
        <PageHeaderWrapper>
          {content}
          <RegisterSoiForm
            visiable={drawerVisiable}
            onCloseDrawer={() => {
              this.onCloseDrawer();
            }}
            soi={selectedSOI}
            dispatch={this.props.dispatch}
          />
        </PageHeaderWrapper>
      </div>
    );
  }
}

export default connect(({ sois }) => ({
  soisData: sois,
}))(SoisNew);

// Sois.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   sois: makeSelectSois(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(withConnect)(injectIntl(Sois));
