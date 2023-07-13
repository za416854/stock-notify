import { _FUNCTION_ID } from './constants';

/**
 * @description Angular_Datatable 相關參數設定
 * @export
 * @class AngularDatatables
 */
export class AngularDatatables {
  /* language setting */
  static language = {
    // emptyTable: '<span class="hint">無符合查詢條件的資料</span>',
    info: '第 _START_ 到 _END_ 筆，共 _TOTAL_ 筆',
    infoEmpty: '共 0 筆',
    infoFiltered: '',
    infoPostFix: '',
    decimal: '',
    thousands: ',',
    lengthMenu: '每頁 _MENU_ 筆',
    loadingRecords: 'Loading...',
    processing: '處理中.......',
    search: '資料篩選:',
    searchPlaceholder: '',
    zeroRecords: '<span class="hint">無符合查詢條件的資料</span>',
    paginate: {
      first: '<i class="bi-chevron-double-left"></i>',
      last: '<i class="bi-chevron-double-right"></i>',
      next: '<i class="bi-chevron-right"></i>',
      previous: '<i class="bi-chevron-left"></i>'
    },
    aria: {
      sortAscending: ': activate to sort column ascending',
      sortDescending: ': activate to sort column descending'
    }
  };

  /* scrollX setting */
  static scrollX = true;

  /* scrollY setting */
  static scrollY = '470px';

  /* scrollCollapse setting */
  static scrollCollapse = true;

  /* pageLength setting */
  static pageLength = 50;

  /* pagingType setting */
  static pagingType = 'full_numbers';

  /* serverSide setting */
  static serverSide = true;

  /* process setting */
  static process = false;

  /* lengthMenu setting */
  static lengthMenu = [10, 25, 50, 100];
}

/**
 * @description 路徑樹
 * @export
 * @class PathTree
 */
export class PathTree {
  /** @description 路徑 */
  static path = {
    /** @description 登入 */
    login: { url: 'login', name: '登入' },
    /** @description 待辦 */
    todo: { url: 'todo', name: '待辦' },
    /******************************************************************************
    **  台股
    ******************************************************************************/
    tw: {
      /** @description 台股管理 */
      twStockManagement: {
        /** @description 台股資訊 - 查詢 */
        twStockQuery: { url: 'tw/twStockQuery', name: '台股資訊-查詢' },
      }
    },
    /******************************************************************************
    **  美股
    ******************************************************************************/
    us: {
      /** @description 美股管理 */
      usStockManagement: {
        /** @description 美股資訊 - 查詢 */
        usStockQuery: { url: 'us/usStockQuery', name: '美股資訊-查詢' },
      }
    },
    /******************************************************************************
    **  財產
    ******************************************************************************/
    pro: {
      /** @description 地號維護 */
      landNumberManagement: {
        /** @description 地號維護 - 查詢 */
        landNumberQuery: { url: 'pro/landNumberManagement', name: '地號維護-查詢' },
        /** @description 地號維護 - 明細 */
        landNumberDetail: { url: 'pro/landNumberManagement/landNumber', name: '地號維護-明細', shortPath: 'landNumber' },
        /** @description 地號維護 - 土地所有權部 */
        landOwnTab: { url: 'pro/landNumberManagement/landNumber/landOwnTab', name: '地號維護-土地所有權部', shortPath: 'landOwnTab' },
        /** @description 地號維護 - 地價稅 */
        landValueTaxTab: { url: 'pro/landNumberManagement/landNumber/landValueTaxTab', name: '地號維護-地價稅', shortPath: 'landValueTaxTab' },
        /** @description 地號維護 - 重估/減損/增額 */
        increaseTab: { url: 'pro/landNumberManagement/landNumber/increaseTab', name: '地號維護-重估/減損/增額', shortPath: 'increaseTab' },
        /** @description 地號維護 - 土增稅準備 */
        landValueIncrementTab: { url: 'pro/landNumberManagement/landNumber/landValueIncrementTab', name: '地號維護-土增稅準備', shortPath: 'landValueIncrementTab' },
        /** @description 地號維護 - 未實現重估 */
        revaluationTab: { url: 'pro/landNumberManagement/landNumber/revaluationTab', name: '地號維護-未實現重估', shortPath: 'revaluationTab' },
        /** @description 地號維護 - 文件 */
        documentTab: { url: 'pro/landNumberManagement/landNumber/documentTab', name: '地號維護-文件', shortPath: 'documentTab' },
        /** @description 地號維護 - 覆核 */
        reviewTab: { url: 'pro/landNumberManagement/landNumber/reviewTab', name: '地號維護-覆核', shortPath: 'reviewTab' }
      }
    },
  };
}

/**
 * @description menu 路徑設定
 * @export
 * @class MenuConfig
 */
export class MenuConfig {
  static config = [
    { title: '待辦', path: PathTree.path.todo.url, functionID: '', nodes: [] },
    // 台股
    { title: '台股資訊', path: PathTree.path.tw.twStockManagement.twStockQuery.url, functionID: _FUNCTION_ID.台股資訊, nodes: [] },
    // 財產
    { title: '地號維護', path: PathTree.path.pro.landNumberManagement.landNumberQuery.url, functionID: _FUNCTION_ID.地號維護, nodes: [] },

  ];
}

/**
 * @description 相關API路徑設定
 * @export
 * @class APITree
 */
export class APITree {
  static path = {
    api: {
      AccountDealTran: {
        /** @description 查詢總帳交易資料(分頁查詢) */
        post_QueryAccountDealTranPage: '/api/AccountDealTran/QueryAccountDealTranPage',
        /** @description 匯出總帳交易資料 */
        post_ExportQueryAccountDealTran: '/api/AccountDealTran/ExportQueryAccountDealTran',
        /** @description 取得某個總帳交易資料 @param {adtKey} */
        get_GetAccountDealTranByKey: '/api/AccountDealTran/GetAccountDealTranByKey/',
        /** @description 新增總帳交易資料 */
        post_InsertAccountDealTran: '/api/AccountDealTran/InsertAccountDealTran',
        /** @description 更新總帳交易資料 */
        put_UpdateAccountDealTran: '/api/AccountDealTran/UpdateAccountDealTran',
        /** @description 刪除總帳交易資料 */
        delete_DeleteAccountDealTran: '/api/AccountDealTran/DeleteAccountDealTran',
        /** @description 取得流程資料 @param {itemKey} */
        get_GetInFlowAccountDealTran: '/api/AccountDealTran/GetInFlowAccountDealTran/',
        /** @description 送出流程 */
        post_SubmitAccountDealTran: '/api/AccountDealTran/SubmitAccountDealTran',
        /** @description 取消編輯 */
        delete_CancelAccountDealTran: '/api/AccountDealTran/CancelAccountDealTran',
        /** @description 執行覆核 */
        post_ReviewAccountDealTran: '/api/AccountDealTran/ReviewAccountDealTran',
        /** @description 資料編號查詢資料 */
        post_QueryAccountNumberDealTranPage: '/api/AccountDealTran/QueryAccountNumberDealTranPage',
        /** @description 查詢部分重分類資料(分頁查詢) */
        post_QueryAccountDealTranPartRECLPage: '/api/AccountDealTran/QueryAccountDealTranPartRECLPage',
        /** @description 匯出部分重分類資料查詢資料 */
        post_ExportQueryAccountDealTranPartRECL: '/api/AccountDealTran/ExportQueryAccountDealTranPartRECL',
        /** @description 取得某個部份重分類資料 @param {adtkey} 總帳交易資料編號 */
        get_GetAccountDealTranPartRECLByKey: '/api/AccountDealTran/GetAccountDealTranPartRECLByKey/',
        /** @description 新增部分重分類資料 */
        post_InsertAccountDealTranPartRECL: '/api/AccountDealTran/InsertAccountDealTranPartRECL',
        /** @description 更新部分重分類資料 */
        put_UpdateAccountDealTranPartRECL: '/api/AccountDealTran/UpdateAccountDealTranPartRECL',
        /** @description 刪除部分重分類資料(已拋轉到總帳的總帳交易資料的資料，不能刪除) */
        delete_DeleteAccountDealTranPartRECL: '/api/AccountDealTran/DeleteAccountDealTranPartRECL',
        /** @description 取得流程中的資料(部分重分類作業) @param {batchNo} 批次號碼 */
        get_GetInFlowAccountDealTranPartRECL: '/api/AccountDealTran/GetInFlowAccountDealTranPartRECL/',
        /** @description 取消編輯(部分重分類) */
        post_CancelAccountDealTranPartRECL: '/api/AccountDealTran/CancelAccountDealTranPartRECL',
        /** @description 送出流程(部分重分類) */
        post_SubmitAccountDealTranPartRECL: '/api/AccountDealTran/SubmitAccountDealTranPartRECL',
        /** @description 執行覆核(部分重分類) */
        post_ReviewAccountDealTranPartRECL: '/api/AccountDealTran/ReviewAccountDealTranPartRECL',
        /** @description 資產編號查詢資料(分頁查詢)(部分重分類) */
        post_QueryAccountNumberDealTranPartRECLPage: '/api/AccountDealTran/QueryAccountNumberDealTranPartRECLPage'
      },
      AccountReceipt: {
        /** @description 查詢銀行專戶資料(分頁查詢) */
        post_QueryBankAccountPage: '/api/AccountReceipt/QueryBankAccountPage',
        /** @description 匯出查詢銀行專戶資料 */
        post_ExportQueryBankAccount: '/api/AccountReceipt/ExportQueryBankAccount',
        /** @description 取得某個銀行專戶資料 @param {tmrKey} */
        get_GetTempReceiptByKey: '/api/AccountReceipt/GetTempReceiptByKey/',
        /** @description 新增查詢銀行專戶資料 */
        post_InsertBankAccount: '/api/AccountReceipt/InsertBankAccount',
        /** @description 刪除查詢銀行專戶資料 */
        delete_DeleteTempReceipt: '/api/AccountReceipt/DeleteTempReceipt',
        /** @description 匯入查詢銀行專戶資料 */
        post_UploadTempReceipt: '/api/AccountReceipt/UploadTempReceipt',
        /** @description 查詢支票資料 (分頁查詢) */
        post_QueryCheckPage: '/api/AccountReceipt/QueryCheckPage',
        /** @description 匯出支票資料查詢資料 */
        post_ExportQueryCheck: '/api/AccountReceipt/ExportQueryCheck',
        /** @description 取得某個支票資料 @param {tmrKey} */
        get_GetCheckByKey: '/api/AccountReceipt/GetCheckByKey/',
        /** @description 新增支票資料 */
        post_InsertCheck: '/api/AccountReceipt/InsertCheck',
        /** @description 更新支票資料 */
        put_UpdateCheck: '/api/AccountReceipt/UpdateCheck',
        /** @description 刪除支票資料 (該筆支票已有沖銷記錄時，則不能刪除。) */
        delete_DeleteCheck: '/api/AccountReceipt/DeleteCheck',
        /** @description 匯入支票資料 */
        post_UploadCheck: '/api/AccountReceipt/UploadCheck',
        /** @description 查詢暫收款資料 (分頁查詢) */
        post_QueryTempReceiptPage: '/api/AccountReceipt/QueryTempReceiptPage',
        /** @description 匯出暫收款資料查詢資料 */
        post_ExportQueryTempReceipt: '/api/AccountReceipt/ExportQueryTempReceipt',
        /** @description 更新暫收款資料 */
        post_UpdateTempReceipt: '/api/AccountReceipt/UpdateTempReceipt',
        /** @description 查詢暫收款沖銷紀錄資料 (分頁查詢) */
        post_QueryWriteOffLogPageTMR: '/api/AccountReceipt/QueryWriteOffLogPageTMR',
        /** @description 匯出暫收款沖銷紀錄資料查詢資料 */
        post_ExportQueryWriteOffLogTMR: '/api/AccountReceipt/ExportQueryWriteOffLogTMR',
        /** @description 取得某個暫收款沖銷紀錄資料 @param {wolkey}  */
        get_GetWriteOffLogByKeyTMR: '/api/AccountReceipt/GetWriteOffLogByKeyTMR/',
        /** @description 新增沖銷紀錄 - 暫收款沖銷  */
        post_InsertWOFDataTMR: '/api/AccountReceipt/InsertWOFDataTMR',
        /** @description 更新沖銷紀錄 - 暫收款沖銷  */
        put_UpdateWriteOffLogTMR: '/api/AccountReceipt/UpdateWriteOffLogTMR',
        /** @description 刪除暫收款沖銷紀錄（人工的紀錄才可做刪除） */
        delete_DeleteWriteOffLogTMR: '/api/AccountReceipt/DeleteWriteOffLogTMR',
      },
      ANManage: {
        /** @description 查詢資產編號管理資料(分頁查詢) */
        post_QueryAccountNumberPage: '/api/ANManage/QueryAccountNumberPage',
        /** @description 匯出資產編號管理查詢資料 */
        post_ExportQueryAccountNumber: '/api/ANManage/ExportQueryAccountNumber',
        /** @description 取得某個資產編號資料 @param {acnKey} */
        get_GetAccountNumberByKey: '/api/ANManage/GetAccountNumberByKey/',
        /** @description 取得某個資產類別代碼對應的資料(取號作業畫面使用) @param {anproptypecode} */
        get_GetANPropTypeDataByCode: '/api/ANManage/GetANPropTypeDataByCode/',
        /** @description 資產編號取號作業儲存資料 */
        post_SaveAccountNumberTakeNumber: '/api/ANManage/SaveAccountNumberTakeNumber',
        /** @description 刪除資產編號資料(欲刪除的資產編號已拋轉至總帳時，則不能刪除) */
        delete_DeleteAccountNumber: '/api/ANManage/DeleteAccountNumber',
        /** @description 儲存資產編號維護資料 */
        post_SaveAccountNumber: '/api/ANManage/SaveAccountNumber'
      },
      ANMainQuery: {
        /** @description 查詢總帳財產目錄資產 (分頁查詢) */
        post_QueryAccountMainPage: '/api/ANMainQuery/QueryAccountMainPage',
        /** @description 匯出總帳財產目錄查詢資料 */
        post_ExportQueryAccountMain: '/api/ANMainQuery/ExportQueryAccountMain'
      },
      BuildingDetail: {
        /* =====================================主建物====================================== */
        /** @description 查詢主建物資料(分頁查詢)(正式) */
        post_QueryBuildingMajorPage: '/api/BuildingDetail/QueryBuildingMajorPage',
        /** @description 查詢主建物暫存資料(分頁查詢)(暫存) */
        post_QueryBuildingMajorTempPage: '/api/BuildingDetail/QueryBuildingMajorTempPage',
        /** @description 匯出主建物查詢資料(正式) */
        post_ExportQueryBuildingMajor: '/api/BuildingDetail/ExportQueryBuildingMajor',
        /** @description 匯出主建物查詢資料(暫存) */
        post_ExportQueryBuildingMajorTemp: '/api/BuildingDetail/ExportQueryBuildingMajorTemp',
        /** @description 取得有效的某個主建物資料(正式) @param {bkey} */
        get_GetBuildingMajorByKey: '/api/BuildingDetail/GetBuildingMajorByKey/',
        /** @description 取得暫存檔中某個主建物資料(暫存) @param {bkey} */
        get_GetBuildingMajorTempByKey: '/api/BuildingDetail/GetBuildingMajorTempByKey/',
        /** @description 新增主建物暫存檔 */
        post_InsertBuildingMajor: '/api/BuildingDetail/InsertBuildingMajor',
        /** @description 更新主建物暫存檔 */
        put_UpdateBuildingMajor: '/api/BuildingDetail/UpdateBuildingMajor',
        /** @description 刪除主建物暫存檔 */
        delete_DeleteBuildingMajor: '/api/BuildingDetail/DeleteBuildingMajor',
        /* ====================================附屬建物====================================== */
        /** @description 查詢附屬建物資料(分頁查詢)(正式) */
        post_QueryBuildingMinorPage: '/api/BuildingDetail/QueryBuildingMinorPage',
        /** @description 查詢附屬建物暫存資料(分頁查詢)(暫存) */
        post_QueryBuildingMinorTempPage: '/api/BuildingDetail/QueryBuildingMinorTempPage',
        /** @description 匯出附屬建物查詢資料(正式) */
        post_ExportQueryBuildingMinor: '/api/BuildingDetail/ExportQueryBuildingMinor',
        /** @description 匯出附屬建物查詢資料(暫存) */
        post_ExportQueryBuildingMinorTemp: '/api/BuildingDetail/ExportQueryBuildingMinorTemp',
        /** @description 取得有效的某個附屬建物資料(正式) @param {bkey} */
        get_GetBuildingMinorByKey: '/api/BuildingDetail/GetBuildingMinorByKey/',
        /** @description 取得暫存檔中某個附屬建物資料(暫存) @param {bkey} */
        get_GetBuildingMinorTempByKey: '/api/BuildingDetail/GetBuildingMinorTempByKey/',
        /** @description 新增附屬建物暫存檔 */
        post_InsertBuildingMinor: '/api/BuildingDetail/InsertBuildingMinor',
        /** @description 更新附屬建物暫存檔 */
        put_UpdateBuildingMinor: '/api/BuildingDetail/UpdateBuildingMinor',
        /** @description 刪除附屬建物暫存檔 */
        delete_DeleteBuildingMinor: '/api/BuildingDetail/DeleteBuildingMinor',
        /* ====================================共同使用====================================== */
        /** @description 查詢共同使用資料(分頁查詢)(正式) */
        post_QueryBuildingPublicPage: '/api/BuildingDetail/QueryBuildingPublicPage',
        /** @description 查詢共同使用暫存資料(分頁查詢)(暫存) */
        post_QueryBuildingPublicTempPage: '/api/BuildingDetail/QueryBuildingPublicTempPage',
        /** @description 匯出共同使用查詢資料(正式) */
        post_ExportQueryBuildingPublic: '/api/BuildingDetail/ExportQueryBuildingPublic',
        /** @description 匯出共同使用查詢資料(暫存) */
        post_ExportQueryBuildingPublicTemp: '/api/BuildingDetail/ExportQueryBuildingPublicTemp',
        /** @description 取得有效的某個共同使用資料(正式) @param {bkey} */
        get_GetBuildingPublicByKey: '/api/BuildingDetail/GetBuildingPublicByKey/',
        /** @description 取得有效的某個共同使用資料(暫存) @param {bkey} */
        get_GetBuildingPublicTempByKey: '/api/BuildingDetail/GetBuildingPublicTempByKey/',
        /** @description 新增共同使用暫存檔 */
        post_InsertBuildingPublic: '/api/BuildingDetail/InsertBuildingPublic',
        /** @description 更新共同使用暫存檔 */
        put_UpdateBuildingPublic: '/api/BuildingDetail/UpdateBuildingPublic',
        /** @description 刪除共同使用暫存檔 */
        delete_DeleteBuildingPublic: '/api/BuildingDetail/DeleteBuildingPublic'
      },
      BuildingMain: {
        /** @description 查詢建號資料(分頁查詢) */
        post_QueryBuildingMainPagge: '/api/BuildingMain/QueryBuildingMainPage',
        /** @description 匯出建號資料 */
        post_ExportBuildingMain: '/api/BuildingMain/ExportBuildingMain',
        /** @description 取得某個資料(正式資料) @param {guid} */
        get_GetBuildingMainByKey: '/api/BuildingMain/GetBuildingMainByKey/',
        /** @description 取得某個資料(暫存資料) @param {guid} */
        get_GetBuildingMainTempByKey: '/api/BuildingMain/GetBuildingMainTempByKey/',
        /** @description 修改資料 */
        post_EditBuildingMain: '/api/BuildingMain/EditBuildingMain',
        /** @description 儲存資料 */
        post_SaveBuildingMain: '/api/BuildingMain/SaveBuildingMain',
        /** @description 取得流程中的資料 */
        get_GetInFlowBuildingMain: '/api/BuildingMain/GetInFlowBuildingMain/',
        /** @description 送出流程 */
        post_SubmitBuildingMain: '/api/BuildingMain/SubmitBuildingMain',
        /** @description 取消編輯 */
        post_CancelBuildingMain: '/api/BuildingMain/CancelBuildingMain',
        /** @description 執行覆核 */
        post_ReviewBuildingMain: '/api/BuildingMain/ReviewBuildingMain',
        /** @description 刪除資料 */
        delete_DeleteBuildingMain: '/api/BuildingMain/DeleteBuildingMain',
        /** @description 文件上傳建號查詢 - 包含暫存資料 */
        post_QueryBuildingMainWithTempPage: '/api/BuildingMain/QueryBuildingMainWithTempPage'
      },
      ContractMain: { // 合約管理主檔
        /** @description 查詢合約資料 (分頁查詢) */
        post_QueryContractMainPage: '/api/ContractMain/QueryContractMainPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractMain: '/api/ContractMain/ExportContractMain',
        /** @description 取得某個資料 (正式資料)  @param {pno} 合約資料編號 */
        get_GetContractMainByKey: '/api/ContractMain/GetContractMainByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {pno} 合約資料編號 */
        get_GetContractMainTempByKey: '/api/ContractMain/GetContractMainTempByKey/',
        /** @description 修改資料 */
        post_EditContractMain: '/api/ContractMain/EditContractMain',
        /** @description 儲存資料 */
        post_SaveContractMain: '/api/ContractMain/SaveContractMain',
        /** @description 送出流程 */
        post_SubmitContractMain: '/api/ContractMain/SubmitContractMain',
        /** @description 取得流程中的資料 @param {itemKey} */
        get_GetInFlowContractMain: '/api/ContractMain/GetInFlowContractMain/',
        /** @description 刪除資料 */
        delete_DeleteContractMain: '/api/ContractMain/DeleteContractMain',
        /** @description 取消編輯 */
        post_CancelContractMain: '/api/ContractMain/CancelContractMain',
        /** @description 執行覆核 */
        post_ReviewContractMain: '/api/ContractMain/ReviewContractMain',
        /** @description 更新聯絡人資料(不需覆核直接更新正式資料) */
        post_UpdateCTMContact: '/api/ContractMain/UpdateCTMContact',
        /** @description 文件上傳合約查詢 - 包含暫存資料 */
        post_QueryContractMainWithTempPage: '/api/ContractMain/QueryContractMainWithTempPage'
      },
      ContractDetail: { // 合約管理附屬資料
        /* =====================================承租財產====================================== */
        /** @description 查詢可承租財產資料 (分頁查詢) */
        post_QueryPropertyListPage: '/api/ContractDetail/QueryPropertyListPage',
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractPropertyPage: '/api/ContractDetail/QueryContractPropertyPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractPropertyTempPage: '/api/ContractDetail/QueryContractPropertyTempPage',
        /** @description 匯出查詢資料 */
        post_ExportContractProperty: '/api/ContractDetail/ExportQueryContractProperty',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractPropertyByKey: '/api/ContractDetail/GetContractPropertyByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractPropertyTempByKey: '/api/ContractDetail/GetContractPropertyTempByKey/',
        /** @description 新增資料 */
        post_InsertContractProperty: '/api/ContractDetail/InsertContractProperty',
        /** @description 資料更新 */
        put_UpdateContractProperty: '/api/ContractDetail/UpdateContractProperty',
        /** @description 刪除資料 */
        delete_DeleteContractProperty: '/api/ContractDetail/DeleteContractProperty',
        /* =====================================停車位====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractParkingPage: '/api/ContractDetail/QueryContractParkingPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractParkingTempPage: '/api/ContractDetail/QueryContractParkingTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractParking: '/api/ContractDetail/ExportQueryContractParking',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractParkingByKey: '/api/ContractDetail/GetContractParkingByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractParkingTempByKey: '/api/ContractDetail/GetContractParkingTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractParking: '/api/ContractDetail/UpdateContractParking',
        /** @description 資料新增 */
        post_InsertContractParking: '/api/ContractDetail/InsertContractParking',
        /** @description 儲存資料 */
        post_SaveContractParking: '/api/ContractDetail/SaveContractParking',
        /** @description 刪除資料 */
        delete_DeleteContractParking: '/api/ContractDetail/DeleteContractParking',
        /** @description 查詢財產停車位（只顯示投資用且尚未出租之財產停車位） */
        post_queryPropertyParkingList: '/api/ContractDetail/QueryPropertyParkingList',
        /* =====================================保證人====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractGuarantorPage: '/api/ContractDetail/QueryContractGuarantorPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractGuarantorTempPage: '/api/ContractDetail/QueryContractGuarantorTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractGuarantor: '/api/ContractDetail/ExportQueryContractGuarantor',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractGuarantorByKey: '/api/ContractDetail/GetContractGuarantorByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractGuarantorTempByKey: '/api/ContractDetail/GetContractGuarantorTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractGuarantor: '/api/ContractDetail/UpdateContractGuarantor',
        /** @description 資料新增 */
        post_InsertContractGuarantor: '/api/ContractDetail/InsertContractGuarantor',
        /** @description 儲存資料 */
        post_SaveContractGuarantor: '/api/ContractDetail/SaveContractGuarantor',
        /** @description 刪除資料 */
        delete_DeleteContractGuarantor: '/api/ContractDetail/DeleteContractGuarantor',
        /* =====================================合約條款====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractTermsPage: '/api/ContractDetail/QueryContractTermsPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractTermsTempPage: '/api/ContractDetail/QueryContractTermsTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractTerms: '/api/ContractDetail/ExportQueryContractTerms',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractTermsByKey: '/api/ContractDetail/GetContractTermsByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractTermsTempByKey: '/api/ContractDetail/GetContractTermsTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractTerms: '/api/ContractDetail/UpdateContractTerms',
        /** @description 資料新增 */
        post_InsertContractTerms: '/api/ContractDetail/InsertContractTerms',
        /** @description 刪除資料 */
        delete_DeleteContractTerms: '/api/ContractDetail/DeleteContractTerms',
        /* =====================================合約提醒====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractRemindPage: '/api/ContractDetail/QueryContractRemindPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractRemindTempPage: '/api/ContractDetail/QueryContractRemindTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractRemind: '/api/ContractDetail/ExportQueryContractRemind',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractRemindByKey: '/api/ContractDetail/GetContractRemindByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractRemindTempByKey: '/api/ContractDetail/GetContractRemindTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractRemind: '/api/ContractDetail/UpdateContractRemind',
        /** @description 資料新增 */
        post_InsertContractRemind: '/api/ContractDetail/InsertContractRemind',
        /** @description 儲存資料 */
        post_SaveContractRemind: '/api/ContractDetail/SaveContractRemind',
        /** @description 刪除資料 */
        delete_DeleteContractRemind: '/api/ContractDetail/DeleteContractRemind',
        /* =====================================次承租人====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractSubTenantPage: '/api/ContractDetail/QueryContractSubTenantPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractSubTenantTempPage: '/api/ContractDetail/QueryContractSubTenantTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractSubTenant: '/api/ContractDetail/ExportQueryContractSubTenant',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractSubTenantByKey: '/api/ContractDetail/GetContractSubTenantByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractSubTenantTempByKey: '/api/ContractDetail/GetContractSubTenantTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractSubTenant: '/api/ContractDetail/UpdateContractSubTenant',
        /** @description 資料新增 */
        post_InsertContractSubTenant: '/api/ContractDetail/InsertContractSubTenant',
        /** @description 儲存資料 */
        post_SaveContractSubTenant: '/api/ContractDetail/UpdateContractSubTenant',
        /** @description 刪除資料 */
        delete_DeleteContractSubTenant: '/api/ContractDetail/DeleteContractSubTenant',
        /* =====================================共同承租人====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractJointTenantPage: '/api/ContractDetail/QueryContractJointTenantPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractJointTenantTempPage: '/api/ContractDetail/QueryContractJointTenantTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractJointTenant: '/api/ContractDetail/ExportQueryContractJointTenant',
        /** @description 取得某個資料 (正式資料)  @param {key} 主索引序號 */
        get_GetContractJointTenantByKey: '/api/ContractDetail/GetContractJointTenantByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {key} 主索引序號 */
        get_GetContractJointTenantTempByKey: '/api/ContractDetail/GetContractJointTenantTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractJointTenant: '/api/ContractDetail/UpdateContractJointTenant',
        /** @description 資料新增 */
        post_InsertContractJointTenant: '/api/ContractDetail/InsertContractJointTenant',
        /** @description 儲存資料 */
        post_SaveContractJointTenant: '/api/ContractDetail/UpdateContractJointTenant',
        /** @description 刪除資料 */
        delete_DeleteContractJointTenant: '/api/ContractDetail/DeleteContractJointTenant'
      },
      ContractRent: { // 合約管理-附屬資料-租金相關
        /* =====================================保證金====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractMarginPage: '/api/ContractRent/QueryContractMarginPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractMarginTempPage: '/api/ContractRent/QueryContractMarginTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractMargin: '/api/ContractRent/ExportQueryContractMargin',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractMarginByKey: '/api/ContractRent/GetContractMarginByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractMarginTempByKey: '/api/ContractRent/GetContractMarginTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractMargin: '/api/ContractRent/UpdateContractMargin',
        /** @description 資料新增 */
        post_InsertContractMargin: '/api/ContractRent/InsertContractMargin',
        /** @description 儲存資料 */
        post_SaveContractMargin: '/api/ContractRent/SaveContractMargin',
        /** @description 刪除資料 */
        delete_DeleteContractMargin: '/api/ContractRent/DeleteContractMargin',
        /** @description 查詢逾期租金資料  @param {cno} 合約編號 */
        get_QueryContractOverdueRentList: '/api/ContractRent/QueryContractOverdueRentList/',
        /* =====================================逾期試算====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractOverdueTrialPage: '/api/ContractRent/QueryContractOverdueTrialPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractOverdueTrialTempPage: '/api/ContractRent/QueryContractOverdueTrialTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractOverdueTrial: '/api/ContractRent/ExportQueryContractOverdueTrial',
        /** @description 取得某個資料 (正式資料)  @param {key} 主索引序號 */
        get_GetContractOverdueTrialByKey: '/api/ContractRent/GetContractOverdueTrialByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {key} 主索引序號 */
        get_GetContractOverdueTrialTempByKey: '/api/ContractRent/GetContractOverdueTrialTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractOverdueTrial: '/api/ContractRent/UpdateContractOverdueTrial',
        /** @description 資料新增 */
        post_InsertContractOverdueTrial: '/api/ContractRent/InsertContractOverdueTrial',
        /** @description 儲存資料 */
        post_SaveContractOverdueTrial: '/api/ContractRent/SaveContractOverdueTrial',
        /** @description 刪除資料 */
        delete_DeleteContractOverdueTrial: '/api/ContractRent/DeleteContractOverdueTrial',
        /* =====================================期款表====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractPaymentSchedulePage: '/api/ContractRent/QueryContractPaymentSchedulePage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractPaymentScheduleTempPage: '/api/ContractRent/QueryContractPaymentScheduleTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractPaymentSchedule: '/api/ContractRent/ExportQueryContractPaymentSchedule',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractPaymentScheduleByKey: '/api/ContractRent/GetContractPaymentScheduleByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractPaymentScheduleTempByKey: '/api/ContractRent/GetContractPaymentScheduleTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractPaymentSchedule: '/api/ContractRent/UpdateContractPaymentSchedule',
        /** @description 資料新增 */
        post_InsertContractPaymentSchedule: '/api/ContractRent/InsertContractPaymentSchedule',
        /** @description 儲存資料 */
        post_SaveContractPaymentSchedule: '/api/ContractRent/SaveContractPaymentSchedule',
        /** @description 刪除資料 */
        delete_DeleteContractPaymentSchedule: '/api/ContractRent/DeleteContractPaymentSchedule',
        /** @description 平準重新計算 */
        post_LevelingContractPaymentSchedule: '/api/ContractRent/LevelingContractPaymentSchedule',
        /** @description 租金調整 */
        post_AdjustContractPaymentSchedule: '/api/ContractRent/AdjustContractPaymentSchedule',
        /** @description 匯入期款表 */
        post_ImportContractPaymentSchedule: '/api/ContractRent/ImportContractPaymentSchedule',
        /* =====================================租金調整====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractRentAdjustmentPage: '/api/ContractRent/QueryContractRentAdjustmentPage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractRentAdjustmentTempPage: '/api/ContractRent/QueryContractRentAdjustmentTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractRentAdjustment: '/api/ContractRent/ExportQueryContractRentAdjustment',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractRentAdjustmentByKey: '/api/ContractRent/GetContractRentAdjustmentByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractRentAdjustmentTempByKey: '/api/ContractRent/GetContractRentAdjustmentTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractRentAdjustment: '/api/ContractRent/UpdateContractRentAdjustment',
        /** @description 資料新增 */
        post_InsertContractRentAdjustment: '/api/ContractRent/InsertContractRentAdjustment',
        /** @description 儲存資料 */
        post_SaveContractRentAdjustment: '/api/ContractRent/SaveContractRentAdjustment',
        /** @description 刪除資料 */
        delete_DeleteContractRentAdjustment: '/api/ContractRent/DeleteContractRentAdjustment',
        /* =====================================設算息====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractMarginInterestPage: '/api/ContractRent/QueryContractMarginInterestPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractMarginInterest: '/api/ContractRent/ExportQueryContractMarginInterest',
        /* =====================================免租期間====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractRentFreePage: '/api/ContractDetail/QueryContractRentFreePage',
        /** @description 查詢資料 暫存資料(分頁查詢) */
        post_QueryContractRentFreeTempPage: '/api/ContractDetail/QueryContractRentFreeTempPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractRentFree: '/api/ContractDetail/ExportQueryContractRentFree',
        /** @description 取得某個資料 (正式資料)  @param {ckey} 主索引序號 */
        get_GetContractRentFreeByKey: '/api/ContractDetail/GetContractRentFreeByKey/',
        /** @description 取得某個資料 (暫存資料)  @param {ckey} 主索引序號 */
        get_GetContractRentFreeTempByKey: '/api/ContractDetail/GetContractRentFreeTempByKey/',
        /** @description 資料更新 */
        put_UpdateContractRentFree: '/api/ContractDetail/UpdateContractRentFree',
        /** @description 資料新增 */
        post_InsertContractRentFree: '/api/ContractDetail/InsertContractRentFree',
        /** @description 儲存資料 */
        post_SaveContractRentFree: '/api/ContractDetail/SaveContractRentFree',
        /** @description 刪除資料 */
        delete_DeleteContractRentFree: '/api/ContractDetail/DeleteContractRentFree',
      },
      ContractData: { // 合約相關
        /** @description 查詢客戶資料 (分頁查詢) */
        post_QueryCustomerProfilePage: '/api/ContractData/QueryCustomerProfilePage',
        /** @description 匯出客戶資料查詢資料 */
        post_ExportQueryCustomerProfile: '/api/ContractData/ExportQueryCustomerProfile',
        /** @description 取得某個客戶資料 @param {customerid} 客戶資料編號 */
        get_GetCustomerProfileByKey: '/api/ContractData/GetCustomerProfileByKey/',
        /** @description 新增客戶資料 */
        post_InsertCustomerProfile: '/api/ContractData/InsertCustomerProfile',
        /** @description 更新客戶資料 */
        put_UpdateCustomerProfile: '/api/ContractData/UpdateCustomerProfile',
        /** @description 刪除客戶資料 (利害關係人資料用到此筆客戶資料的資料，則不能刪除。) */
        delete_DeleteCustomerProfile: '/api/ContractData/DeleteCustomerProfile',
        /** @description 查詢客戶聯絡人資料 (分頁查詢) */
        post_QueryCustomerContactPage: '/api/ContractData/QueryCustomerContactPage',
        /** @description 匯出客戶聯絡人資料查詢資料 */
        post_ExportQueryCustomerContact: '/api/ContractData/ExportQueryCustomerContact',
        /** @description 取得客戶聯絡人資料 @param {key} 主索引序號 */
        get_GetCustomerContactByKey: '/api/ContractData/GetCustomerContactByKey/',
        /** @description 新增客戶聯絡人資料 */
        post_InsertCustomerContact: '/api/ContractData/InsertCustomerContact',
        /** @description 更新客戶聯絡人資料 */
        put_UpdateCustomerContact: '/api/ContractData/UpdateCustomerContact',
        /** @description 刪除客戶聯絡人資料 */
        delete_DeleteCustomerContact: '/api/ContractData/DeleteCustomerContact',
        /** @description 取得客戶聯絡人下拉選項資料 @param {cid} */
        get_CustomerContactList: '/api/ContractData/GetCustomerContactList/',
        /** @description 查詢集團資料 (分頁查詢) */
        post_QueryCompanyGroupPage: '/api/ContractData/QueryCompanyGroupPage',
        /** @description 匯出集團資料查詢資料 */
        post_ExportQueryCompanyGroup: '/api/ContractData/ExportQueryCompanyGroup',
        /** @description 取得某個集團資料 @param {groupid} */
        get_GetCompanyGroupByKey: '/api/ContractData/GetCompanyGroupByKey/',
        /** @description 新增集團資料 */
        post_InsertCompanyGroup: '/api/ContractData/InsertCompanyGroup',
        /** @description 更新集團資料 */
        put_UpdateCompanyGroup: '/api/ContractData/UpdateCompanyGroup',
        /** @description 刪除集團資料 */
        delete_DeleteCompanyGroup: '/api/ContractData/DeleteCompanyGroup',
        /** @description 取得集團下拉選項資料 */
        get_GetCompanyGroupList: '/api/ContractData/GetCompanyGroupList',
        /** @description 查詢設算利息資料 (分頁查詢) */
        post_QueryImputedInterestPage: '/api/ContractData/QueryImputedInterestPage',
        /** @description 匯出設算利息查詢資料 */
        post_ExportQueryImputedInterest: '/api/ContractData/ExportQueryImputedInterest',
        /** @description 取得某個設算利息資料 @param {interestym} */
        get_GetImputedInterestByKey: '/api/ContractData/GetImputedInterestByKey/',
        /** @description 新增設算利息資料 */
        post_InsertImputedInterest: '/api/ContractData/InsertImputedInterest',
        /** @description 更新設算利息資料 */
        put_UpdateImputedInterest: '/api/ContractData/UpdateImputedInterest',
        /** @description 刪除設算利息資料 */
        delete_DeleteImputedInterest: '/api/ContractData/DeleteImputedInterest',
        /** @description 查詢郵局二年期小額利率資料 (分頁查詢) */
        post_QueryPostInterestPage: '/api/ContractData/QueryPostInterestPage',
        /** @description 匯出郵局二年期小額利率查詢資料 */
        post_ExportQueryPostInterest: '/api/ContractData/ExportQueryPostInterest',
        /** @description 取得某個郵局二年期小額利率資料 @param {interestDate} */
        get_GetPostInterestByKey: '/api/ContractData/GetPostInterestByKey/',
        /** @description 新增郵局二年期小額利率資料 */
        post_InsertPostInterest: '/api/ContractData/InsertPostInterest',
        /** @description 更新郵局二年期小額利率資料 */
        put_UpdatePostInterest: '/api/ContractData/UpdatePostInterest',
        /** @description 刪除郵局二年期小額利率資料 */
        delete_DeletePostInterest: '/api/ContractData/DeletePostInterest'
      },
      ContractModify: { // 合約異動
        /* =====================================合約異動====================================== */
        /** @description 合約異動（修改資料） */
        post_EditContractModify: '/api/ContractModify/EditContractModify',
        /** @description 儲存資料 */
        post_SaveContractModify: '/api/ContractModify/SaveContractModify',
        /** @description 送出流程 */
        post_SubmitContractModify: '/api/ContractModify/SubmitContractModify',
        /** @description 取得流程中資料 @param {itemKey} */
        get_GetInFlowContractModify: '/api/ContractModify/GetInFlowContractModify/',
        /** @description 取消編輯 */
        post_CancelContractModify: '/api/ContractModify/CancelContractModify',
        /** @description 執行覆核 */
        post_ReviewContractModify: '/api/ContractModify/ReviewContractModify',
        /** @description 取得某個變更歷程資料（正式資料） @param {contractNo} @param {versionNo} */
        get_GetContractModifyLogByKey: '/api/ContractModify/GetContractModifyLogByKey/',
        /** @description 取得某個變更歷程資料（暫時資料） @param {contractNo} @param {versionNo} */
        get_GetContractModifyLogTempByKey: '/api/ContractModify/GetContractModifyLogTempByKey/',
        /* =====================================變更歷程====================================== */
        /** @description 查詢資料 (分頁查詢) */
        post_QueryContractModifyLogPage: '/api/ContractModify/QueryContractModifyLogPage',
        /** @description 匯出查詢資料 */
        post_ExportQueryContractModifyLog: '/api/ContractModify/ExportContractModifyLog',
        /** @description 取得某個歷史合約主檔  @param {contractNo} @param {versionNo} */
        get_GetContractMainHistoryByKey: '/api/ContractModify/GetContractMainHistoryByKey/',
        /** @description 查詢歷史合約承租財產  */
        post_QueryContractPropertyHistoryPage: '/api/ContractModify/QueryContractPropertyHistoryPage',
        /** @description 匯出歷史合約承租財產  */
        post_ExportContractPropertyHistory: '/api/ContractModify/ExportContractPropertyHistory',
        /** @description 查詢歷史合約停車位  */
        post_QueryContractParkingHistoryPage: '/api/ContractModify/QueryContractParkingHistoryPage',
        /** @description 匯出歷史合約停車位  */
        post_ExportContractParkingHistory: '/api/ContractModify/ExportContractParkingHistory',
        /** @description 查詢歷史合約期款表  */
        post_QueryContractPaymentScheduleHistoryPage: '/api/ContractModify/QueryContractPaymentScheduleHistoryPage',
        /** @description 匯出歷史合約期款表  */
        post_ExportContractPaymentScheduleHistory: '/api/ContractModify/ExportContractPaymentScheduleHistory',
        /** @description 查詢歷史合約保證人  */
        post_QueryContractGuarantorHistoryPage: '/api/ContractModify/QueryContractGuarantorHistoryPage',
        /** @description 匯出歷史合約保證人  */
        post_ExportContractGuarantorHistory: '/api/ContractModify/ExportContractGuarantorHistory',
        /** @description 查詢歷史合約保證金  */
        post_QueryContractMarginHistoryPage: '/api/ContractModify/QueryContractMarginHistoryPage',
        /** @description 匯出歷史合約保證金  */
        post_ExportContractMarginHistory: '/api/ContractModify/ExportContractMarginHistory',
        /** @description 查詢歷史合約合約條款  */
        post_QueryContractTermsHistoryPage: '/api/ContractModify/QueryContractTermsHistoryPage',
        /** @description 匯出歷史合約合約條款  */
        post_ExportContractTermsHistory: '/api/ContractModify/ExportContractTermsHistory',
        /** @description 查詢歷史合約免租期間  */
        post_QueryContractRentFreeHistoryPage: '/api/ContractModify/QueryContractRentFreeHistoryPage',
        /** @description 匯出歷史合約免租期間  */
        post_ExportContractRentFreeHistoryPage: '/api/ContractModify/ExportContractRentFreeHistory',
        /** @description 查詢歷史合約次承租人  */
        post_QueryContractSubTenantHistoryPage: '/api/ContractModify/QueryContractSubTenantHistoryPage',
        /** @description 匯出歷史合約次承租人  */
        post_ExportContractSubTenantHistory: '/api/ContractModify/ExportContractSubTenantHistory',
        /** @description 查詢歷史合約共同承租人  */
        post_QueryContractJointTenantHistoryPage: '/api/ContractModify/QueryContractJointTenantHistoryPage',
        /** @description 匯出歷史合約共同承租人  */
        post_ExportContractJointTenantHistory: '/api/ContractModify/ExportContractJointTenantHistory',
      },
      ContractRPT: {
        /** @description RPT401 預估五年租金明細表 */
        post_ExportRPT401: '/api/ContractRPT/ExportRPT401',
        /** @description RPT402 月收入報表 */
        post_ExportRPT402: '/api/ContractRPT/ExportRPT402',
        /** @description RPT403 收款明細表 */
        post_ExportRPT403: '/api/ContractRPT/ExportRPT403',
        /** @description RPT403_1 收款明細表-其他費用 */
        post_ExportRPT403_1: '/api/ContractRPT/ExportRPT403_1',
        /** @description RPT405 租金平準化明細表 */
        post_ExportRPT405: '/api/ContractRPT/ExportRPT405',
        /** @description RPT406 應收未收明細表 */
        post_ExportRPT406: '/api/ContractRPT/ExportRPT406',
        /** @description RPT406_1 應收未收明細表-其他費用 */
        post_ExportRPT406_1: '/api/ContractRPT/ExportRPT406_1',
        /** @description RPT407 IFRS租金直線法攤銷表 */
        post_ExportRPT407: '/api/ContractRPT/ExportRPT407',
        /** @description RPT408 保證金印花稅彙整 */
        post_ExportRPT408: '/api/ContractRPT/ExportRPT408',
        /** @description RPT409 保證金/保證品明細表 */
        post_ExportRPT409: '/api/ContractRPT/ExportRPT409',
      },
      DocFile: {
        /** @description 查詢文件檔案資料(分頁查詢) */
        post_QueryDocFilePage: '/api/DocFile/QueryDocFilePage',
        /** @description 匯出文件檔案查詢資料 */
        post_ExportQueryDocFile: '/api/DocFile/ExportQueryDocFile',
        /** @description 取得某個文件檔案資料 @param {docid} 文件Guid */
        get_GetDocFileByKey: '/api/DocFile/GetDocFileByKey/',
        /** @description 新增文件檔案 */
        post_InsertDocFile: '/api/DocFile/InsertDocFile',
        /** @description 更新文件檔案 */
        put_UpdateDocFile: '/api/DocFile/UpdateDocFile',
        /** @description 刪除文件檔案 (以IsActive='N'的方式邏輯刪除，實體檔案不刪除) */
        delete_DeleteDocFile: '/api/DocFile/DeleteDocFile',
        /** @description 上傳文件檔案 @param {docGuid} 文件Guid */
        post_UploadDocFile: '/api/DocFile/UploadDocFile/',
        /** @description 下載文件檔案 @param {docGuid} 文件Guid */
        post_DownloadDocFile: '/api/DocFile/DownloadDocFile/'
      },
      FNDInterest: {   // 保證金設算息立帳
        /** @description 查詢批次資料 (分頁查詢) */
        post_QueryFNDInterestBatchPage: '/api/FNDInterest/QueryFNDInterestBatchPage',
        /** @description 查詢批次明細 (分頁查詢) */
        post_QueryFNDInterestPage: '/api/FNDInterest/QueryFNDInterestPage',
        /** @description 執行保證金設算息立帳 */
        post_RunFNDInterestSet: '/api/FNDInterest/RunFNDInterestSet',
        /** @description 匯出查詢資料 */
        post_ExportFNDInterest: '/api/FNDInterest/ExportFNDInterest',
        /** @description 更新保證人設算息立帳處理人員 */
        post_UpdateFNDInterestProcessor: '/api/FNDInterest/UpdateFNDInterestProcessor',
        /** @description 取得某筆保證金設算息立帳明細資料  @param {key} 主索引序號 */
        get_GetFNDInterestByKey: '/api/FNDInterest/GetFNDInterestByKey/',
        /** @description 更新保證金設算息立帳批次明細資料 */
        put_UpdateFNDInterest: '/api/FNDInterest/UpdateFNDInterest',
        /** @description 取消編輯（刪除資料） */
        delete_DeleteFNDInterest: '/api/FNDInterest/DeleteFNDInterest',
        /** @description 取得流程中的資料 @param {key} */
        get_GetInFlowFNDInterest: '/api/FNDInterest/GetInFlowFNDInterestBatch/',
        /** @description 送出流程 */
        post_SubmitFNDInterest: '/api/FNDInterest/SubmitFNDInterest',
        /** @description 執行覆核 */
        post_ReviewFNDInterest: '/api/FNDInterest/ReviewFNDInterest',
      },
      FNDEmploye: {
        /** @description 查詢員工停車費立帳批次(分頁查詢) */
        post_QueryFNDEmployeBatchPage: '/api/FNDEmploye/QueryFNDEmployeBatchPage',
        /** @description 匯入員工停車費立帳資料 */
        post_UploadFNDEmploye: '/api/FNDEmploye/UploadFNDEmploye',
        /** @description 取得流程中的資料 @param {reviewItem} 批次號碼 */
        get_GetInFlowFNDEmployeBatch: '/api/FNDEmploye/GetInFlowFNDEmployeBatch/',
        /** @description 更新員工停車費立帳處理人員 */
        post_UpdateFNDEmployeProcessor: '/api/FNDEmploye/UpdateFNDEmployeProcessor',
        /** @description 送出流程 */
        post_SubmitFNDEmploye: '/api/FNDEmploye/SubmitFNDEmploye',
        /** @description 刪除批次（取消編輯） */
        delete_DeleteFNDEmploye: '/api/FNDEmploye/DeleteFNDEmploye',
        /** @description 執行覆核 */
        post_ReviewFNDEmploye: '/api/FNDEmploye/ReviewFNDEmploye',
        /** @description 查詢員工停車費立帳批次明細 */
        post_QueryFNDEmployePage: '/api/FNDEmploye/QueryFNDEmployePage',
        /** @description 匯出員工提車費立帳批次明細資料 */
        post_ExportFNDEmploye: '/api/FNDEmploye/ExportFNDEmploye',
        /** @description 取得某筆員工停車費立賬資料 @param {reviewItem} 批次號碼 */
        get_GetFNDEmployeByKey: '/api/FNDEmploye/GetFNDEmployeByKey/'
      },
      FNDManage: {
        /** @description 查詢管理費立帳批次(分頁查詢) */
        post_QueryFNDManageBatchPage: '/api/FNDManage/QueryFNDManageBatchPage',
        /** @description 執行管理費立帳作業 */
        post_RunFNDManageSet: '/api/FNDManage/RunFNDManageSet',
        /** @description 取得流程中的資料 @param {itemKey} 批次編號 */
        get_GetInFlowFNDManageBatch: '/api/FNDManage/GetInFlowFNDManageBatch/',
        /** @description 更新管理費立帳處理人員 */
        post_UpdateFNDManageProcessor: '/api/FNDManage/UpdateFNDManageProcessor',
        /** @description 送出流程 */
        post_SubmitFNDManage: '/api/FNDManage/SubmitFNDManage',
        /** @description 刪除批次(取消編輯) */
        delete_DeleteFNDManage: '/api/FNDManage/DeleteFNDManage',
        /** @description 執行覆核 */
        post_ReviewFNDManage: '/api/FNDManage/ReviewFNDManage',
        /** @description 查詢管理費立帳批次明細(分頁查詢) */
        post_QueryFNDManagePage: '/api/FNDManage/QueryFNDManagePage',
        /** @description 匯出管理費立帳批次明細資料 */
        post_ExportFNDManage: '/api/FNDManage/ExportFNDManage',
        /** @description 取得某筆管理費立帳資料 @param {key} 案件編號 */
        get_GetFNDManageByKey: '/api/FNDManage/GetFNDManageByKey/',
        /** @description 更新管理費立帳資料 */
        put_UpdateFNDManage: '/api/FNDManage/UpdateFNDManage',
        /** @description 匯入管理費立帳資料 */
        post_ImportFNDManage: '/api/FNDManage/ImportFNDManage',
        /** @description 刪除管理費立帳金額為0的資料 */
        delete_DeleteFNDManageZeroAmount: '/api/FNDManage/DeleteFNDManageZeroAmount'
      },
      FNDParking: {
        /** @description 查詢車位清潔費立帳批次(分頁查詢) */
        post_QueryFNDParkingBatchPage: '/api/FNDParking/QueryFNDParkingBatchPage',
        /** @description 執行車位清潔費立帳作業 */
        post_RunFNDParkingSet: '/api/FNDParking/RunFNDParkingSet',
        /** @description 取得流程中的資料 @param {itemKey} 批次編號 */
        get_GetInFlowFNDParkingBatch: '/api/FNDParking/GetInFlowFNDParkingBatch/',
        /** @description 更新車位清潔費立帳處理人員 */
        post_UpdateFNDParkingProcessor: '/api/FNDParking/UpdateFNDParkingProcessor',
        /** @description 送出流程 */
        post_SubmitFNDParking: '/api/FNDParking/SubmitFNDParking',
        /** @description 刪除批次(取消編輯) */
        delete_DeleteFNDParking: '/api/FNDParking/DeleteFNDParking',
        /** @description 執行覆核 */
        post_ReviewFNDParking: '/api/FNDParking/ReviewFNDParking',
        /** @description 查詢車位清潔費立帳批次明細(分頁查詢) */
        post_QueryFNDParkingPage: '/api/FNDParking/QueryFNDParkingPage',
        /** @description 匯出車位清潔費立帳批次明細資料 */
        post_ExportFNDParking: '/api/FNDParking/ExportFNDParking',
        /** @description 取得某筆車位清潔費立帳資料 @param {key} 主索引序號 */
        get_GetFNDParkingByKey: '/api/FNDParking/GetFNDParkingByKey/',
        /** @description 更新車位清潔費立帳資料 */
        put_UpdateFNDParking: '/api/FNDParking/UpdateFNDParking',
        /** @description 匯入車位清潔費立帳資料 */
        post_ImportFNDParking: '/api/FNDParking/ImportFNDParking',
        /** @description 刪除車位清潔費立帳金額為0的資料 */
        delete_DeleteFNDParkingZeroAmount: '/api/FNDParking/DeleteFNDParkingZeroAmount'
      },
      FNDRent: {
        /** @description 查詢租金立帳批次(分頁查詢) */
        post_QueryFNDRentBatchPage: '/api/FNDRent/QueryFNDRentBatchPage',
        /** @description 執行租金立帳作業 */
        post_RunFNDRentSet: '/api/FNDRent/RunFNDRentSet',
        /** @description 取得流程中的資料 @param {itemKey} 主索引序號 */
        get_GetInFlowFNDRentBatch: '/api/FNDRent/GetInFlowFNDRentBatch/',
        /** @description 更新租金立帳處理人員 */
        post_UpdateFNDRentProcessor: '/api/FNDRent/UpdateFNDRentProcessor',
        /** @description 送出流程 */
        post_SubmitFNDRent: '/api/FNDRent/SubmitFNDRent',
        /** @description 刪除批次(取消編輯) */
        delete_DeleteFNDRent: '/api/FNDRent/DeleteFNDRent',
        /** @description 執行覆核 */
        post_ReviewFNDRent: '/api/FNDRent/ReviewFNDRent',
        /** @description 查詢租金立帳批次明細(分頁查詢) */
        post_QueryFNDRentPage: '/api/FNDRent/QueryFNDRentPage',
        /** @description 匯出租金立帳批次明細資料 */
        post_ExportFNDRent: '/api/FNDRent/ExportFNDRent',
        /** @description 取得某筆租金立帳資料 @param {key} 案件編號 */
        get_GetFNDRentByKey: '/api/FNDRent/GetFNDRentByKey/',
        /** @description 更新租金立帳資料 */
        put_UpdateFNDRent: '/api/FNDRent/UpdateFNDRent'
      },
      FNDUtility: {
        /** @description 查詢水電瓦斯費立帳批次(分頁查詢) */
        post_QueryFNDUtilityBatchPage: '/api/FNDUtility/QueryFNDUtilityBatchPage',
        /** @description 匯入水電瓦斯費立帳資料 */
        post_UploadFNDUtility: '/api/FNDUtility/UploadFNDUtility',
        /** @description 取得流程中的資料 @param {reviewItem} 批次號碼 */
        get_GetInFlowFNDUtilityBatch: '/api/FNDUtility/GetInFlowFNDUtilityBatch/',
        /** @description 更新水電瓦斯費立帳處理人員 */
        post_UpdateFNDUtilityProcessor: '/api/FNDUtility/UpdateFNDUtilityProcessor',
        /** @description 送出流程 */
        post_SubmitFNDUtility: '/api/FNDUtility/SubmitFNDUtility',
        /** @description 刪除水電瓦斯費批次(取消編輯) */
        delete_DeleteFNDUtility: '/api/FNDUtility/DeleteFNDUtility',
        /** @description 執行覆核 */
        post_ReviewFNDUtility: '/api/FNDUtility/ReviewFNDUtility',
        /** @description 查詢水電瓦斯費立帳批次明細資料 */
        post_QueryFNDUtilityPage: '/api/FNDUtility/QueryFNDUtilityPage',
        /** @description 匯出水電瓦斯費立帳批次明細資料 */
        post_ExportFNDUtility: '/api/FNDUtility/ExportFNDUtility',
        /** @description 取得某比水電瓦斯費立帳資料 @param {fuT_Key} 水電費明細資料主索引 */
        get_GetFNDUtilityByKey: '/api/FNDUtility/GetFNDUtilityByKey/'
      },
      Invoice: {
        /** @description 查詢發票管理資料(分頁查詢) */
        post_QueryPageVoucherInvoiceManage: '/api/Invoice/QueryPageVoucherInvoiceManage',
        /** @description 匯出發票管理資料 */
        post_ExportQueryVoucherInvoiceManage: '/api/Invoice/ExportQueryVoucherInvoiceManage',
        /** @description 取得某個發票管理資料 */
        get_GetVoucherInvoiceMgrByKey: '/api/Invoice/GetVoucherInvoiceMgrByKey/',
        /** @description 更新發票管理資料 */
        put_UpdateInvoice: '/api/Invoice/UpdateInvoice',
        /** @description 執行發票作廢 */
        post_ExecuteCancelVoucherInvoice: '/api/Invoice/ExecuteCancelVoucherInvoice',
        /** @description 取消發票作廢 */
        post_CancelCancelVoucherInvoice: '/api/Invoice/CancelCancelVoucherInvoice',
        /** @description 新增發票折讓紀錄 */
        post_InsertVoucherInvoiceReturn: '/api/Invoice/InsertVoucherInvoiceReturn',
        /** @description 取得發票客製化折讓明細(部分折讓or全部折讓) */
        post_QueryVoucherInvoiceReturnCustomDetail: '/api/Invoice/QueryVoucherInvoiceReturnCustomDetail',
        /** @description 發票客製化折讓-更新單筆傳票明細資料(暫存資料) */
        put_UpdateVoucherInvoiceReturnDetail: '/api/Invoice/UpdateVoucherInvoiceReturnDetail',
        /** @description 存檔並新增發票客製化折讓紀錄(部分折讓or全部折讓) */
        post_SaveInsertVoucherInvoiceReturnCustom: '/api/Invoice/SaveInsertVoucherInvoiceReturnCustom',
        /** @description 刪除發票部分折讓紀錄(以拋轉至總帳or已覆核完成，無法刪除)*/
        delete_DeletePartialVoucherInvoiceReturn: '/api/Invoice/DeletePartialVoucherInvoiceReturn',
        /** @description 刪除發票折讓紀錄 */
        delete_DeleteVoucherInvoiceReturn: '/api/Invoice/DeleteVoucherInvoiceReturn',
        /** @description 取得流程中的資料 @param {settleBatch} 批次號碼 */
        get_GetInFlowVoucherInvoice: '/api/Invoice/GetInFlowVoucherInvoice/',
        /** @description 查詢發票明細資料(分頁查詢) */
        post_QueryPageVoucherInvoiceDetail: '/api/Invoice/QueryPageVoucherInvoiceDetail',
        /** @description 匯出發票明細查詢資料 */
        post_ExportQueryVoucherInvoiceDetail: '/api/Invoice/ExportQueryVoucherInvoiceDetail',
        /** @description 查詢折讓紀錄資料(分頁查詢) */
        post_QueryPageVoucherInvoiceReturn: '/api/Invoice/QueryPageVoucherInvoiceReturn',
        /** @description 匯出折讓紀錄查詢資料 */
        post_ExportQueryVoucherInvoiceReturn: '/api/Invoice/ExportQueryVoucherInvoiceReturn'
      },
      LandDetail: {
        /* ====================================土地所有權部==================================== */
        /** @description 查詢土地所有權部資料(分頁查詢) */
        post_QueryLandOwnershipPage: '/api/LandDetail/QueryLandOwnershipPage',
        /** @description 查詢土地所有權部資料(分頁查詢)(暫存) */
        post_QueryLandOwnershipTempPage: '/api/LandDetail/QueryLandOwnershipTempPage',
        /** @description 匯出土地所有權部查詢資料 */
        post_ExportQueryLandOwnership: '/api/LandDetail/ExportQueryLandOwnership',
        /** @description 匯出土地所有權部查詢資料(暫存) */
        post_ExportQueryLandOwnershipTemp: '/api/LandDetail/ExportQueryLandOwnershipTemp',
        /** @description 取得有效的某個土地所有權部資料 @param {lkey} 主索引序號 */
        get_GetLandOwnershipByKey: '/api/LandDetail/GetLandOwnershipByKey/',
        /** @description 取得有效的某個土地所有權部資料(暫存) @param {lkey} 主索引序號 */
        get_GetLandOwnershipTempByKey: '/api/LandDetail/GetLandOwnershipTempByKey/',
        /** @description 新增土地所有權部(暫存) */
        post_InsertLandOwnership: '/api/LandDetail/InsertLandOwnership',
        /** @description 更新土地所有權部(暫存) */
        put_UpdateLandOwnership: '/api/LandDetail/UpdateLandOwnership',
        /** @description 刪除土地所有權部(暫存) */
        delete_DeleteLandOwnership: '/api/LandDetail/DeleteLandOwnership',
        /* ======================================地價稅======================================= */
        /** @description 查詢地價稅資料(分頁查詢) */
        post_QueryLandTaxPage: '/api/LandDetail/QueryLandTaxPage',
        /** @description 查詢地價稅資料(分頁查詢)(暫存) */
        post_QueryLandTaxTempPage: '/api/LandDetail/QueryLandTaxTempPage',
        /** @description 匯出地價稅查詢資料(正式) */
        post_ExportQueryLandTax: '/api/LandDetail/ExportQueryLandTax',
        /** @description 匯出地價稅查詢資料(暫存) */
        post_ExportQueryLandTaxTemp: '/api/LandDetail/ExportQueryLandTaxTemp',
        /** @description 取得有效的某個地價稅資料(正式) @param {lkey} 主索引序號 */
        get_GetLandTaxByKey: '/api/LandDetail/GetLandTaxByKey/',
        /** @description 取得有效的某個地價稅資料(暫存) @param {lkey} 主索引序號 */
        get_GetLandTaxTempByKey: '/api/LandDetail/GetLandTaxTempByKey/',
        /** @description 新增地價稅暫存檔(暫存) */
        post_InsertLandTax: '/api/LandDetail/InsertLandTax',
        /** @description 更新地價稅暫存檔(暫存) */
        put_UpdateLandTax: '/api/LandDetail/UpdateLandTax',
        /** @description 刪除地價稅暫存檔(暫存) */
        delete_DeleteLandTax: '/api/LandDetail/DeleteLandTax',
        /* ===================================重估/減損/增額=================================== */
        /** @description 查詢重估/減損/增額資料(分頁查詢) */
        post_QueryLandRevaluationPage: '/api/LandDetail/QueryLandRevaluationPage',
        /** @description 查詢重估/減損/增額資料(分頁查詢)(暫存) */
        post_QueryLandRevaluationTempPage: '/api/LandDetail/QueryLandRevaluationTempPage',
        /** @description 匯出重估/減損/增額查詢資料(正式) */
        post_ExportQueryLandRevaluation: '/api/LandDetail/ExportQueryLandRevaluation',
        /** @description 匯出重估/減損/增額查詢資料(暫存) */
        post_ExportQueryLandRevaluationTemp: '/api/LandDetail/ExportQueryLandRevaluationTemp',
        /** @description 取得有效的某個重估/減損/增額資料(正式) @param {lkey} 主索引序號 */
        get_GetLandRevaluationByKey: '/api/LandDetail/GetLandRevaluationByKey/',
        /** @description 取得暫存檔中某個重估/減損/增額資料(暫存) @param {lkey} 主索引序號 */
        get_GetLandRevaluationTempByKey: '/api/LandDetail/GetLandRevaluationTempByKey/',
        /** @description 新增重估/減損/增額暫存檔 */
        post_InsertLandRevaluation: '/api/LandDetail/InsertLandRevaluation',
        /** @description 更新重估/減損/增額暫存檔 */
        put_UpdateLandRevaluation: '/api/LandDetail/UpdateLandRevaluation',
        /** @description 刪除重估/減損/增額暫存檔 */
        delete_DeleteLandRevaluation: '/api/LandDetail/DeleteLandRevaluation',
        /* =====================================土增稅準備===================================== */
        /** @description 查詢土增稅準備資料(分頁查詢) */
        post_QueryLandIncreaseTaxPage: '/api/LandDetail/QueryLandIncreaseTaxPage',
        /** @description 查詢土增稅準備資料(分頁查詢)(暫存) */
        post_QueryLandIncreaseTaxTempPage: '/api/LandDetail/QueryLandIncreaseTaxTempPage',
        /** @description 匯出土增稅準備查詢資料(正式) */
        post_ExportQueryLandIncreaseTax: '/api/LandDetail/ExportQueryLandIncreaseTax',
        /** @description 匯出土增稅準備查詢資料(暫存) */
        post_ExportQueryLandIncreaseTaxTemp: '/api/LandDetail/ExportQueryLandIncreaseTaxTemp',
        /** @description 取得有效的某個土增稅準備資料(正式) @param {lkey} 主索引序號 */
        get_GetLandIncreaseTaxByKey: '/api/LandDetail/GetLandIncreaseTaxByKey/',
        /** @description 取得暫存檔中某個土增稅準備資料(暫存) @param {lkey} 主索引序號 */
        get_GetLandIncreaseTaxTempByKey: '/api/LandDetail/GetLandIncreaseTaxTempByKey/',
        /** @description 新增土增稅準備暫存檔 */
        post_InsertLandIncreaseTax: '/api/LandDetail/InsertLandIncreaseTax',
        /** @description 更新土增稅準備暫存檔 */
        put_UpdateLandIncreaseTax: '/api/LandDetail/UpdateLandIncreaseTax',
        /** @description 刪除土增稅準備暫存檔 */
        delete_DeleteLandIncreaseTax: '/api/LandDetail/DeleteLandIncreaseTax',
        /* =====================================未實現重估===================================== */
        /** @description 查詢未實現重估資料(分頁查詢)(正式) */
        post_QueryLandUnrealizedPage: '/api/LandDetail/QueryLandUnrealizedPage',
        /** @description 查詢未實現重估資料(分頁查詢)(暫存) */
        post_QueryLandUnrealizedTempPage: '/api/LandDetail/QueryLandUnrealizedTempPage',
        /** @description 匯出未實現重估查詢資料(正式) */
        post_ExportQueryLandUnrealized: '/api/LandDetail/ExportQueryLandUnrealized',
        /** @description 匯出未實現重估查詢資料(暫存資料) */
        post_ExportQueryLandUnrealizedTemp: '/api/LandDetail/ExportQueryLandUnrealizedTemp',
        /** @description 取得有效的某個未實現重估資料(正式) @param {lkey} 主索引序號 */
        get_GetLandUnrealizedByKey: '/api/LandDetail/GetLandUnrealizedByKey/',
        /** @description 取得暫存檔中某個未實現重估資料(暫存) @param {lkey} 主索引序號 */
        get_GetLandUnrealizedTempByKey: '/api/LandDetail/GetLandUnrealizedTempByKey/',
        /** @description 新增未實現重估暫存檔 */
        post_InsertLandUnrealized: '/api/LandDetail/InsertLandUnrealized',
        /** @description 更新未實現重估暫存檔 */
        put_UpdateLandUnrealized: '/api/LandDetail/UpdateLandUnrealized',
        /** @description 刪除未實現重估暫存檔 */
        delete_DeleteLandUnrealized: '/api/LandDetail/DeleteLandUnrealized',
      },
      LandMain: {
        /** @description 查詢資料(分頁查詢) */
        post_QueryLandMainPage: '/api/LandMain/QueryLandMainPage',
        /** @description 匯出查詢資料 */
        post_ExportLandMain: '/api/LandMain/ExportLandMain',
        /** @description 取得某個資料(正式資料) @param {guid} GUID */
        get_GetLandMainByKey: '/api/LandMain/GetLandMainByKey/',
        /** @description 取得某個資料(暫存資料) @param {guid} GUID */
        get_GetLandMainTempByKey: '/api/LandMain/GetLandMainTempByKey/',
        /** @description 新增資料 */
        post_SaveLandMain: '/api/LandMain/SaveLandMain',
        /** @description 修改資料 */
        post_EditLandMain: '/api/LandMain/EditLandMain',
        /** @description 取得流程中的地號資料 @param {itemKey} 流程項目主索引 */
        get_GetInFlowLandMain: '/api/LandMain/GetInFlowLandMain/',
        /** @description 送出流程 */
        post_SubmitLandMain: '/api/LandMain/SubmitLandMain',
        /** @description 取消編輯 */
        post_CancelLandMain: '/api/LandMain/CancelLandMain',
        /** @description 執行覆核 */
        post_ReviewLandMain: '/api/LandMain/ReviewLandMain',
        /** @description 刪除資料 */
        delete_DeleteLandMain: '/api/LandMain/DeleteLandMain',
        /** @description 計算所有權部總權利範圍及面積 @param {guid} GUID */
        get_CalculateOwnership: '/api/LandMain/CalculateOwnership/',
        /** @description 文件上傳地號查詢 - 包含暫存資料 */
        post_QueryLandMainWithTempPage: '/api/LandMain/QueryLandMainWithTempPage'
      },
      PMData: {
        /** @description 查詢物管使用單位資料(分頁查詢) */
        post_QueryPMUserUnitPage: '/api/PMData/QueryPMUserUnitPage',
        /** @description 匯出物管使用單位查詢資料 */
        post_ExportQueryPMUserUnit: '/api/PMData/ExportQueryPMUserUnit',
        /** @description 取得某個物管使用單位資料 @param {unitid}  */
        get_GetPMUserUnitByKey: '/api/PMData/GetPMUserUnitByKey/',
        /** @description 新增物管使用單位資料 */
        post_InsertPMUserUnit: '/api/PMData/InsertPMUserUnit',
        /** @description 更新物管使用單位資料 */
        put_UpdatePMUserUnit: '/api/PMData/UpdatePMUserUnit',
        /** @description 刪除物管使用單位資料 */
        delete_DeletePMUserUnit: '/api/PMData/DeletePMUserUnit',
        /** @description 查詢物管廠商資料(分頁查詢) */
        post_QueryPMVendorsPage: '/api/PMData/QueryPMVendorsPage',
        /** @description 匯出物管廠商資料查詢資料 */
        post_ExportQueryPMVendors: '/api/PMData/ExportQueryPMVendors',
        /** @description 取得某個物管廠商資料 @param {vendorid}  */
        get_GetPMVendorsByKey: '/api/PMData/GetPMVendorsByKey/',
        /** @description 新增物管廠商資料 */
        post_InsertPMVendors: '/api/PMData/InsertPMVendors',
        /** @description 更新物管廠商資料 */
        put_UpdatePMVendors: '/api/PMData/UpdatePMVendors',
        /** @description 刪除物管廠商資料 */
        delete_DeletePMVendors: '/api/PMData/DeletePMVendors',
        /* ===================================各大樓請修繕作業管理=================================== */
        /** @description 查詢各大樓請修繕資料(分頁查詢) */
        post_QueryPMBuildingRepairPage: '/api/PMData/QueryPMBuildingRepairPage',
        /** @description 匯出各大樓請修繕查詢資料 */
        post_ExportQueryPMBuildingRepair: '/api/PMData/ExportQueryPMBuildingRepair',
        /** @description 取得某各大樓請修繕資料 @param {pbrKey} */
        get_GetPMBuildingRepairByKey: '/api/PMData/GetPMBuildingRepairByKey/',
        /** @description 取得新增各大樓請修繕資料時系統資料(包含修繕日期、逾期日期) */
        get_GetAddPMBuildingRepairSysData: '/api/PMData/GetAddPMBuildingRepairSysData',
        /** @description 取得各大樓請修繕資料的處理天數(完成日期扣除報修日期扣除六日) @param {demandDate} @param {completionDate} */
        get_GetPMBuildingRepairProcessDays: '/api/PMData/GetPMBuildingRepairProcessDays/',
        /** @description 取得各大樓請修繕資料的拆分金額(金額拆分「投資用、自用、管理費」) @param {buildingID} @param {payType} @param {bidAmount} */
        get_GetPMBuildingRepairSplitAmount: '/api/PMData/GetPMBuildingRepairSplitAmount/',
        /** @description 取得各大樓請修繕資料大樓包含的財產個數 @param {buildingID} */
        get_GetPMBuildingRepairBuildingPropertyCount: '/api/PMData/GetPMBuildingRepairBuildingPropertyCount/',
        /** @description 新增各大樓請修繕資料 */
        post_InsertPMBuildingRepair: '/api/PMData/InsertPMBuildingRepair',
        /** @description 更新各大樓請修繕資料 */
        put_UpdatePMBuildingRepair: '/api/PMData/UpdatePMBuildingRepair',
        /** @description 刪除各大樓請修繕資料(有「採購核准日期」or「完成日期」的資料不能刪除) */
        delete_DeletePMBuildingRepair: '/api/PMData/DeletePMBuildingRepair',
        /** @description 匯入各大樓請修繕資料 */
        post_UploadPMBuildingRepair: '/api/PMData/UploadPMBuildingRepair',
        /* ===================================各大樓年度工作計劃=================================== */
        /** @description 查詢各大樓年度工作計劃資料(分頁查詢) */
        post_QueryPMBuildingYearPlanPage: '/api/PMData/QueryPMBuildingYearPlanPage',
        /** @description 匯出各大樓年度工作計劃資料 */
        post_ExportQueryPMBuildingYearPlan: '/api/PMData/ExportQueryPMBuildingYearPlan',
        /** @description 取得各大樓年度工作計劃資料 @param {pypKey} */
        get_GetPMBuildingYearPlanByKey: '/api/PMData/GetPMBuildingYearPlanByKey/',
        /** @description 新增各大樓年度工作計劃資料 */
        post_InsertPMBuildingYearPlan: '/api/PMData/InsertPMBuildingYearPlan',
        /** @description 更新各大樓年度工作計劃資料 */
        put_UpdatePMBuildingYearPlan: '/api/PMData/UpdatePMBuildingYearPlan',
        /** @description 刪除各大樓年度工作計劃資料(已經有完成維護紀錄或下年度的簽約紀錄，則不能刪除) */
        delete_DeletePMBuildingYearPlan: '/api/PMData/DeletePMBuildingYearPlan',
        /** @description 匯入各大樓年度工作計劃資料 */
        post_UploadPMBuildingYearPlan: '/api/PMData/UploadPMBuildingYearPlan',
      },
      PropertyData: {
        /** @description 查詢鑑價公司資料(分頁查詢) */
        post_QueryValuationCompanyPage: '/api/PropertyData/QueryValuationCompanyPage',
        /** @description 匯出鑑價公司查詢資料 */
        post_ExportQueryValuationCompany: '/api/PropertyData/ExportQueryValuationCompany',
        /** @description 取得某個鑑價公司資料 @param {coid} */
        get_GetValuationCompanyByKey: '/api/PropertyData/GetValuationCompanyByKey/',
        /** @description 新增鑑價公司資料 */
        post_InsertValuationCompany: '/api/PropertyData/InsertValuationCompany',
        /** @description 更新鑑價公司資料 */
        put_UpdateValuationCompany: '/api/PropertyData/UpdateValuationCompany',
        /** @description 刪除鑑價公司資料(鑑價資料維護用到此筆鑑價公司的資料，則不能刪除) */
        delete_DeleteValuationCompany: '/api/PropertyData/DeleteValuationCompany',
        /** @description 取得鑑價公司資料下拉選單 */
        get_GetValuationCompanyList: '/api/PropertyData/GetValuationCompanyList',
        /** @description 查詢大樓資料(分頁查詢) */
        post_QueryBuildingProfilePage: '/api/PropertyData/QueryBuildingProfilePage',
        /** @description 匯出大樓資料查詢資料 */
        post_ExportQueryBuildingProfile: '/api/PropertyData/ExportQueryBuildingProfile',
        /** @description 取得某個大樓資料 @param {bldgid} */
        get_GetBuildingProfileByKey: '/api/PropertyData/GetBuildingProfileByKey/',
        /** @description 取得大樓的樓層下拉選單 @param {bldgid} */
        get_GetBuildingFloorListByBldgid: '/api/PropertyData/GetBuildingFloorListByBldgid/',
        /** @description 新增大樓資料 */
        post_InsertBuildingProfile: '/api/PropertyData/InsertBuildingProfile',
        /** @description 更新大樓資料 */
        put_UpdateBuildingProfile: '/api/PropertyData/UpdateBuildingProfile',
        /** @description 刪除大樓資料 */
        delete_DeleteBuildingProfile: '/api/PropertyData/DeleteBuildingProfile',
        /** @description 查詢樓層資料(分頁查詢) */
        post_QueryBuildingFloorPage: '/api/PropertyData/QueryBuildingFloorPage',
        /** @description 匯出樓層查詢資料 */
        post_ExportQueryBuildingFloor: '/api/PropertyData/ExportQueryBuildingFloor',
        /** @description 取得某個樓層資料 @param {fid} */
        get_GetBuildingFloorByKey: '/api/PropertyData/GetBuildingFloorByKey/',
        /** @description 新增樓層資料 */
        post_InsertBuildingFloor: '/api/PropertyData/InsertBuildingFloor',
        /** @description 更新樓層資料 */
        put_UpdateBuildingFloor: '/api/PropertyData/UpdateBuildingFloor',
        /** @description 刪除樓層資料 */
        delete_DeleteBuildingFloor: '/api/PropertyData/DeleteBuildingFloor',
        /** @description 查詢耐用年限資料(分頁查詢) */
        post_QueryDurabilityProfilePage: '/api/PropertyData/QueryDurabilityProfilePage',
        /** @description 匯出耐用年限查詢料 */
        post_ExportQueryDurabilityProfile: '/api/PropertyData/ExportQueryDurabilityProfile',
        /** @description 取得某個耐用年限資料 @param {durabilityid} */
        get_GetDurabilityProfileByKey: '/api/PropertyData/GetDurabilityProfileByKey/',
        /** @description 新增耐用年限資料 */
        post_InsertDurabilityProfile: '/api/PropertyData/InsertDurabilityProfile',
        /** @description 更新耐用年限資料 */
        put_UpdateDurabilityProfile: '/api/PropertyData/UpdateDurabilityProfile',
        /** @description 刪除耐用年限資料  */
        delete_DeleteDurabilityProfile: '/api/PropertyData/DeleteDurabilityProfile',
        /** @description 查詢財產鑑價資料  */
        post_QueryPropertyValuationPage: '/api/PropertyData/QueryPropertyValuationPage',
        /** @description 匯出財產鑑價資料查詢資料  */
        post_ExportQueryPropertyValuation: '/api/PropertyData/ExportQueryPropertyValuation',
        /** @description 匯入財產鑑價資料資料  */
        post_ImportPropertyValuation: '/api/PropertyData/ImportPropertyValuation',
        /** @description 匯出待鑑價的財產資料  */
        post_ExportEstimatedPropertyValuation: '/api/PropertyData/ExportEstimatedPropertyValuation',
        /** @description 查詢財產折舊資料(分頁查詢) */
        post_QueryPropertyDepreciationPage: '/api/PropertyData/QueryPropertyDepreciationPage',
        /** @description 匯出財產折舊查詢資料 */
        post_ExportQueryPropertyDepreciation: '/api/PropertyData/ExportQueryPropertyDepreciation',
        /** @description 查詢財產折舊資料(分頁查詢)(單一財產) */
        post_QueryPropertyDepreciationPropPage: '/api/PropertyData/QueryPropertyDepreciationPropPage',
        /** @description 匯出財產折舊查詢資料(單一財產) */
        export_ExportQueryPropertyDepreciationProp: '/api/PropertyData/ExportQueryPropertyDepreciationProp',
      },
      PropertyDetail: {
        /* ===================================== 地號 ====================================== */
        /** @description 查詢地號資料(分頁查詢-正式資料) */
        post_QueryPropertyLandPage: '/api/PropertyDetail/QueryPropertyLandPage',
        /** @description 查詢地號資料(分頁查詢-暫存資料) */
        post_QueryPropertyLandTempPage: '/api/PropertyDetail/QueryPropertyLandTempPage',
        /** @description 匯出地號資料 */
        post_ExportQueryPropertyLand: '/api/PropertyDetail/ExportQueryPropertyLand',
        /** @description 取得某個地號資料(正式資料) @param {bkey} */
        get_GetPropertyLandByKey: '/api/PropertyDetail/GetPropertyLandByKey/',
        /** @description 取得某個地號資料(暫存資料) @param {bkey} */
        get_GetPropertyLandTempByKey: '/api/PropertyDetail/GetPropertyLandTempByKey/',
        /** @description 新增地號資料 */
        post_InsertPropertyLand: '/api/PropertyDetail/InsertPropertyLand',
        /** @description 更新地號資料 */
        put_UpdatePropertyLand: '/api/PropertyDetail/UpdatePropertyLand',
        /** @description 刪除地號(包含刪除地號資料) */
        delete_DeletePropertyLand: '/api/PropertyDetail/DeletePropertyLand',
        /* ===================================== 建號 ====================================== */
        /** @description 查詢建號資料(分頁查詢-正式資料) */
        post_QueryPropertyBuildPage: '/api/PropertyDetail/QueryPropertyBuildPage',
        /** @description 查詢建號資料(分頁查詢-暫存資料) */
        post_QueryPropertyBuildTempPage: '/api/PropertyDetail/QueryPropertyBuildTempPage',
        /** @description 匯出建號資料 */
        post_ExportQueryPropertyBuild: '/api/PropertyDetail/ExportQueryPropertyBuild',
        /** @description 取得某個建號資料(正式資料) @param {bkey} */
        get_GetPropertyBuildByKey: '/api/PropertyDetail/GetPropertyBuildByKey/',
        /** @description 取得某個建號資料(暫存資料) @param {bkey} */
        get_GetPropertyBuildTempByKey: '/api/PropertyDetail/GetPropertyBuildTempByKey/',
        /** @description 新增建號資料 */
        post_InsertPropertyBuild: '/api/PropertyDetail/InsertPropertyBuild',
        /** @description 更新建號資料 */
        put_UpdatePropertyBuild: '/api/PropertyDetail/UpdatePropertyBuild',
        /** @description 刪除建號(包含刪除建號資料) */
        delete_DeletePropertyBuild: '/api/PropertyDetail/DeletePropertyBuild',
        /* ===================================== 成本 ====================================== */
        /** @description 查詢成本資料(分頁查詢-正式資料) */
        post_QueryPropertyCostPage: '/api/PropertyDetail/QueryPropertyCostPage',
        /** @description 查詢成本資料(分頁查詢-暫存資料) */
        post_QueryPropertyCostTempPage: '/api/PropertyDetail/QueryPropertyCostTempPage',
        /** @description 匯出成本資料 */
        post_ExportQueryPropertyCost: '/api/PropertyDetail/ExportQueryPropertyCost',
        /** @description 取得某個成本資料(正式資料) @param {guid} */
        get_GetPropertyCostByKey: '/api/PropertyDetail/GetPropertyCostByKey/',
        /** @description 取得某個成本資料(暫存資料) @param {guid} */
        get_GetPropertyCostTempByKey: '/api/PropertyDetail/GetPropertyCostTempByKey/',
        /** @description 新增成本資料 */
        post_InsertPropertyCost: '/api/PropertyDetail/InsertPropertyCost',
        /** @description 更新成本資料 */
        put_UpdatePropertyCost: '/api/PropertyDetail/UpdatePropertyCost',
        /** @description 刪除成本(包含刪除成本資料) */
        delete_DeletePropertyCost: '/api/PropertyDetail/DeletePropertyCost',
        /* ===================================== 停車位 ====================================== */
        /** @description 查詢停車位資料(分頁查詢-正式資料) */
        post_QueryPropertyParkingPage: '/api/PropertyDetail/QueryPropertyParkingPage',
        /** @description 查詢停車位資料(分頁查詢-暫存資料) */
        post_QueryPropertyParkingTempPage: '/api/PropertyDetail/QueryPropertyParkingTempPage',
        /** @description 匯出停車位資料 */
        post_ExportQueryPropertyParking: '/api/PropertyDetail/ExportQueryPropertyParking',
        /** @description 查詢可選取的停車位清單 */
        post_QueryPropertyParkingListPage: '/api/PropertyDetail/QueryPropertyParkingListPage',
        /** @description 取得某個停車位資料(正式資料) @param {bkey} */
        get_GetPropertyParkingByKey: '/api/PropertyDetail/GetPropertyParkingByKey/',
        /** @description 取得某個停車位資料(暫存資料) @param {bkey} */
        get_GetPropertyParkingTempByKey: '/api/PropertyDetail/GetPropertyParkingTempByKey/',
        /** @description 新增停車位資料 */
        post_InsertPropertyParking: '/api/PropertyDetail/InsertPropertyParking',
        /** @description 更新停車位資料 */
        put_UpdatePropertyParking: '/api/PropertyDetail/UpdatePropertyParking',
        /** @description 刪除停車位(包含刪除停車位資料) */
        delete_DeletePropertyParking: '/api/PropertyDetail/DeletePropertyParking',
        /** @description 匯入停車位資料 */
        post_ImportPropertyParking: '/api/PropertyDetail/ImportPropertyParking',
        /** @description 計算停車位成本 */
        post_CalculateParkingHoldCost: '/api/PropertyDetail/CalculateParkingHoldCost',
        /* ===================================== 設備/改良 ====================================== */
        /** @description 查詢設備/改良（分頁查詢-正式資料） */
        post_QueryPropertyEquipmentPage: '/api/PropertyDeal/QueryPropertyEquipmentPage',
        /** @description 查詢設備/改良（分頁查詢-暫存資料） */
        post_QueryPropertyEquipmentTempPage: '/api/PropertyDeal/QueryPropertyEquipmentTempPage',
        /** @description 匯出設備/改良資料 */
        post_ExportQueryPropertyEquipment: '/api/PropertyDeal/ExportQueryPropertyEquipment',
        /** @description 取得某個設備/改良(正式資料) @param {bkey} */
        get_GetPropertyEquipmentByKey: '/api/PropertyDeal/GetPropertyEquipmentByKey/',
        /** @description 取得某個設備/改良(暫存資料) @param {bkey} */
        get_GetPropertyEquipmentTempByKey: '/api/PropertyDeal/GetPropertyEquipmentTempByKey/',
        /** @description 新增設備/改良資料 */
        post_InsertPropertyEquipment: '/api/PropertyDeal/InsertPropertyEquipment/',
        /** @description 更新設備/改良資料 */
        put_UpdatePropertyEquipment: '/api/PropertyDeal/UpdatePropertyEquipment',
        /** @description 刪除設備/改良資料 */
        delete_DeletePropertyEquipment: '/api/PropertyDeal/DeletePropertyEquipment',
        /** @description 匯入財產設備資料 */
        post_UploadPropertyEquipment: '/api/PropertyDeal/UploadPropertyEquipment',
        /** @description 以財產編號取得房屋總財編剩餘使用期-->建物修繕耐用年限 @param {propertyNo} */
        get_GetPropertyLeftDurability: '/api/PropertyDeal/GetPropertyLeftDurability/',
        /* ===================================== 重估/減損/增額 ====================================== */
        /** @description 查詢重估/減損/增額（分頁查詢-正式資料） */
        post_QueryPropertyRevaluationPage: '/api/PropertyDeal/QueryPropertyRevaluationPage',
        /** @description 查詢重估/減損/增額（分頁查詢-暫存資料） */
        post_QueryPropertyRevaluationTempPage: '/api/PropertyDeal/QueryPropertyRevaluationTempPage',
        /** @description 匯出重估/減損/增額資料 */
        post_ExportQueryPropertyRevaluation: '/api/PropertyDeal/ExportQueryPropertyRevaluation',
        /** @description 取得某個重估/減損/增額(正式資料) @param {guid} */
        get_GetPropertyRevaluationByKey: '/api/PropertyDeal/GetPropertyRevaluationByKey/',
        /** @description 取得某個重估/減損/增額(暫存資料) @param {guid} */
        get_GetPropertyRevaluationTempByKey: '/api/PropertyDeal/GetPropertyRevaluationTempByKey/',
        /** @description 新增重估/減損/增額資料  @param {type} */
        post_InsertPropertyRevaluation: '/api/PropertyDeal/InsertPropertyRevaluation/',
        /** @description 更新重估/減損/增額資料 */
        put_UpdatePropertyRevaluation: '/api/PropertyDeal/UpdatePropertyRevaluation',
        /** @description 刪除重估/減損/增額資料 */
        delete_DeletePropertyRevaluation: '/api/PropertyDeal/DeletePropertyRevaluation',
        /* ===================================== 共用設備 ====================================== */
        /** @description 查詢共用設備資料(分頁查詢) */
        post_QueryPropertyEquipmentShareSplitPage: '/api/PropertyDeal/QueryPropertyEquipmentShareSplitPage',
        /** @description 匯出共用設備資料 */
        post_ExportQueryPropertyEquipmentShareSplit: '/api/PropertyDeal/ExportQueryPropertyEquipmentShareSplit',
        /* ===================================== 地價稅/房屋稅 ====================================== */
        /** @description 查詢地價稅/房屋稅資料(分頁查詢-正式資料) */
        post_QueryPropertyTaxPage: '/api/PropertyTax/QueryPropertyTaxPage',
        /** @description 查詢地價稅/房屋稅資料(分頁查詢-暫存資料) */
        post_QueryPropertyTaxTempPage: '/api/PropertyTax/QueryPropertyTaxTempPage',
        /** @description 匯出地價稅/房屋稅資料 */
        post_ExportQueryPropertyTax: '/api/PropertyTax/ExportQueryPropertyTax',
        /** @description 取得某個地價稅/房屋稅資料(正式資料) @param {bkey} */
        get_GetPropertyTaxByKey: '/api/PropertyTax/GetPropertyTaxByKey/',
        /** @description 取得某個地價稅/房屋稅資料(暫存資料) @param {bkey} */
        get_GetPropertyTaxTempByKey: '/api/PropertyTax/GetPropertyTaxTempByKey/',
        /** @description 新增地價稅/房屋稅資料 */
        post_InsertPropertyTax: '/api/PropertyTax/InsertPropertyTax',
        /** @description 更新地價稅/房屋稅資料 */
        put_UpdatePropertyTax: '/api/PropertyTax/UpdatePropertyTax',
        /** @description 刪除地價稅/房屋稅(包含刪除地價稅/房屋稅資料) */
        delete_DeletePropertyTax: '/api/PropertyTax/DeletePropertyTax',
        /* ===================================== 使用單位 ====================================== */
        /** @description 查詢使用單位資料(分頁查詢) */
        post_QueryPropertyUsagePage: '/api/PropertyDeal/QueryPropertyUsagePage',
        /** @description 匯出使用單位資料 */
        post_ExportQueryPropertyUsage: '/api/PropertyDeal/ExportQueryPropertyUsage',
        /** @description 取得某個使用單位資料 @param {pno} @param {sno} */
        get_GetPropertyUsageByKey: '/api/PropertyDeal/GetPropertyUsageByKey/',
        /** @description 新增使用單位資料 */
        post_InsertPropertyUsage: '/api/PropertyDeal/InsertPropertyUsage',
        /** @description 更新使用單位資料 */
        put_UpdatePropertyUsage: '/api/PropertyDeal/UpdatePropertyUsage',
        /** @description 刪除使用單位資料 */
        delete_DeletePropertyUsage: '/api/PropertyDeal/DeletePropertyUsage',
        /** @description 查詢財產目前總使用坪數 @param {pno} */
        get_QueryPropertyTotalUseAreaPN: '/api/PropertyDeal/QueryPropertyTotalUseAreaPN/',
        /* ===================================== 出租 ====================================== */
        /** @description 查詢出租資料(分頁查詢) */
        post_QueryPropertyRentPage: '/api/PropertyDeal/QueryPropertyRentPage',
        /** @description 匯出出租資料 */
        post_ExportQueryPropertyRent: '/api/PropertyDeal/ExportQueryPropertyRent',
        /* ===================================== 轉列紀錄 ====================================== */
        /** @description 查詢轉列紀錄(分頁查詢) */
        post_QueryPropertyTransLogPage: '/api/PropertyDeal/QueryPropertyTransLogPage',
        /** @description 匯出轉列紀錄 */
        post_ExportQueryPropertyTransLog: '/api/PropertyDeal/ExportQueryPropertyTransLog',
        /** @description 取得某個轉列紀錄 @param {pno} @param {sno} */
        get_GetPropertyTransLogByKey: '/api/PropertyDeal/GetPropertyTransLogByKey/',
        /* ===================================== 出售報廢 ====================================== */
        /** @description 查詢出售報廢資料(分頁查詢-正式資料) */
        post_QueryPropertyDealLogPage: '/api/PropertyDeal/QueryPropertyDealLogPage',
        /** @description 查詢出售報廢資料(分頁查詢-暫存資料) */
        post_QueryPropertyDealLogTempPage: '/api/PropertyDeal/QueryPropertyDealLogTempPage',
        /** @description 匯出出售報廢資料 */
        post_ExportQueryPropertyDealLog: '/api/PropertyDeal/ExportQueryPropertyDealLog'
      },
      PropertyDealLog: {
        /** @description 修改資料-新增財產處理紀錄 */
        post_EditPropertyDealLog: '/api/PropertyDealLog/EditPropertyDealLog',
        /** @description 以財產編號取得財產處理暫存資料 @param {pno} */
        get_GetPropertyDealLogByPropertyNo: '/api/PropertyDealLog/GetPropertyDealLogByPropertyNo/',
        /** @description 儲存資料-財產處理紀錄 */
        post_SavePropertyDealLog: '/api/PropertyDealLog/SavePropertyDealLog',
        /** @description 取得流程中的資料-財產處理紀錄 @param {itemKey} */
        get_GetInFlowPropertyDealLog: '/api/PropertyDealLog/GetInFlowPropertyDealLog/',
        /** @description 送出流程-財產處理紀錄 */
        post_SubmitPropertyDealLog: '/api/PropertyDealLog/SubmitPropertyDealLog',
        /** @description 取消編輯-財產處理紀錄 */
        post_CancelPropertyDealLog: '/api/PropertyDealLog/CancelPropertyDealLog',
        /** @description 執行覆核-財產處理紀錄 */
        post_ReviewPropertyDealLog: '/api/PropertyDealLog/ReviewPropertyDealLog',
        /** @description 查詢交易對象(分頁查詢) */
        post_QueryPropertyDealObjectPage: '/api/PropertyDealLog/QueryPropertyDealObjectPage',
        /** @description 查詢交易對象-暫存資料(分頁查詢) */
        post_QueryPropertyDealObjectTempPage: '/api/PropertyDealLog/QueryPropertyDealObjectTempPage',
        /** @description 匯出交易對象 */
        post_ExportQueryPropertyDealObject: '/api/PropertyDealLog/ExportQueryPropertyDealObject',
        /** @description 取得某個交易對象 @param {pno} @param {id}  */
        get_GetPropertyDealObjectByKey: '/api/PropertyDealLog/GetPropertyDealObjectByKey/',
        /** @description 取得某個交易對象-暫存資料 @param {pno} @param {id}  */
        get_GetPropertyDealObjectTempByKey: '/api/PropertyDealLog/GetPropertyDealObjectTempByKey/',
        /** @description 新增交易對象 */
        post_InsertPropertyDealObject: '/api/PropertyDealLog/InsertPropertyDealObject',
        /** @description 更新交易對象 */
        put_UpdatePropertyDealObject: '/api/PropertyDealLog/UpdatePropertyDealObject',
        /** @description 刪除交易對象 */
        delete_DeletePropertyDealObject: '/api/PropertyDealLog/DeletePropertyDealObject'
      },
      PropertyMain: {
        /** @description 查詢財產管理資料(分頁查詢) */
        post_QueryPropertyMainPage: '/api/PropertyMain/QueryPropertyMainPage',
        /** @description 匯出查詢資料 */
        post_ExportPropertyMain: '/api/PropertyMain/ExportPropertyMain',
        /** @description 匯出查詢資料-自用財產使用單位 */
        post_ExportPropertyMainPM: '/api/PropertyMain/ExportPropertyMainPM',
        /** @description 取得某個資料(正式資料) @param {pno} */
        get_GetPropertyMainByKey: '/api/PropertyMain/GetPropertyMainByKey/',
        /** @description 取得某個資料(暫存資料) @param {pno} */
        get_GetPropertyMainTempByKey: '/api/PropertyMain/GetPropertyMainTempByKey/',
        /** @description 修改資料 */
        post_EditPropertyMain: '/api/PropertyMain/EditPropertyMain',
        /** @description 儲存資料 */
        post_SavePropertyMain: '/api/PropertyMain/SavePropertyMain',
        /** @description 取得流程中的資料  @param {itemKey} */
        get_GetInFlowPropertyMain: '/api/PropertyMain/GetInFlowPropertyMain/',
        /** @description 送出流程 */
        post_SubmitPropertyMain: '/api/PropertyMain/SubmitPropertyMain',
        /** @description 取消編輯 */
        post_CancelPropertyMain: '/api/PropertyMain/CancelPropertyMain',
        /** @description 執行覆核 */
        post_ReviewPropertyMain: '/api/PropertyMain/ReviewPropertyMain',
        /** @description 刪除資料 */
        delete_DeletePropertyMain: '/api/PropertyMain/deletePropertyMain',
        /** @description 文件上傳財產查詢 - 包含暫存資料 */
        post_QueryPropertyMainWithTempPage: '/api/PropertyMain/QueryPropertyMainWithTempPage',
      },
      PropertyTaxImport: {
        /** 匯入稅務資料 */
        post_UploadPropertyTaxImport: '/api/PropertyTaxImport/UploadPropertyTaxImport',
        /** 查詢財產稅務匯入批次資料 (分頁查詢) */
        post_QueryPropertyTaxImportBatchPage: '/api/PropertyTaxImport/QueryPropertyTaxImportBatchPage',
        /** 查詢財產稅務明細資料 (分頁查詢) */
        post_QueryPropertyTaxImportPage: '/api/PropertyTaxImport/QueryPropertyTaxImportPage',
        /** 匯出財產稅務查詢資料 */
        post_ExportQueryPropertyTaxImport: '/api/PropertyTaxImport/ExportQueryPropertyTaxImport',
        /** 刪除財產稅務明匯入批次資料 (批次覆核狀態為[未送覆核]或[退回經辦]，才能刪除。) */
        delete_DeletePropertyTaxImport: '/api/PropertyTaxImport/DeletePropertyTaxImport',
        /** 更新財產稅務明細檔資料 */
        put_UpdatePropertyTaxImport: '/api/PropertyTaxImport/UpdatePropertyTaxImport',
        /** 取得流程中的資料 @param {taxType} @param {importBatch} */
        get_GetInFlowPropertyTaxImportBatch: '/api/PropertyTaxImport/GetInFlowPropertyTaxImportBatch/',
        /** 送出流程 (匯入稅務資料) */
        post_SubmitPropertyTaxImport: '/api/PropertyTaxImport/SubmitPropertyTaxImport',
        /** 執行覆核 (匯入稅務資料) */
        post_ReviewPropertyTaxImport: '/api/PropertyTaxImport/ReviewPropertyTaxImport'
      },
      PropertyEquipmentShare: {
        /** 查詢共用設備群組資料 (分頁查詢) */
        post_QueryPropertyEquipmentShareGroupPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentShareGroupPage',
        /** 匯出共用設備群組查詢資料 */
        post_ExportPropertyEquipmentShareGroup: '/api/PropertyEquipmentShare/ExportPropertyEquipmentShareGroup',
        /** 取得某個共用設備群組資料 (正式資料) @param {shareId} */
        get_GetPropertyEquipmentShareGroupByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareGroupByKey/',
        /** 取得某個共用設備群組資料 (暫存資料) @param {shareId} */
        get_GetPropertyEquipmentShareGroupTempByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareGroupTempByKey/',
        /** 修改資料 */
        post_EditPropertyEquipmentShareGroup: '/api/PropertyEquipmentShare/EditPropertyEquipmentShareGroup',
        /** 儲存資料 (新增共用設備/修繕) */
        post_SavePropertyEquipmentShareGroup: '/api/PropertyEquipmentShare/SavePropertyEquipmentShareGroup',
        /** 取得流程中的資料 @param {itemKey} */
        get_GetInFlowPropertyEquipmentShare: '/api/PropertyEquipmentShare/GetInFlowPropertyEquipmentShare/',
        /** 送出流程 */
        post_SubmitPropertyEquipmentShare: '/api/PropertyEquipmentShare/SubmitPropertyEquipmentShare',
        /** 取消編輯 */
        post_CancelPropertyEquipmentShare: '/api/PropertyEquipmentShare/CancelPropertyEquipmentShare',
        /** 執行覆核 */
        post_ReviewPropertyEquipmentShare: '/api/PropertyEquipmentShare/ReviewPropertyEquipmentShare',
        /** 刪除資料 */
        delete_DeletePropertyEquipmentShare: '/api/PropertyEquipmentShare/DeletePropertyEquipmentShare',
        /** 查詢共用設備資料 (分頁查詢) */
        post_QueryPropertyEquipmentSharePage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentSharePage',
        /** 查詢共用設備 暫存資料 (分頁查詢) */
        post_QueryPropertyEquipmentShareTempPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentShareTempPage',
        /** 匯出共用設備查詢資料 */
        post_ExportPropertyEquipmentShare: '/api/PropertyEquipmentShare/ExportPropertyEquipmentShare',
        /** 取得某個共用設備資料 (正式資料) @param {accountNo} */
        get_GetPropertyEquipmentShareByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareByKey/',
        /** 取得某個共用設備資料 (暫存資料) @param {accountNo} */
        get_GetPropertyEquipmentShareTempByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareTempByKey/',
        /** 更新共用設備資料 */
        put_UpdatePropertyEquipmentShare: '/api/PropertyEquipmentShare/UpdatePropertyEquipmentShare',
        /** 查詢共用設備財產拆分資料-正式 (分頁查詢) */
        post_QueryPropertyEquipmentAllocationPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentAllocationPage',
        /** 查詢共用設備財產拆分資料-暫存 (分頁查詢) */
        post_QueryPropertyEquipmentAllocationTempPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentAllocationTempPage',
        /** 匯出共用設備財產拆分查詢資料 */
        post_ExportPropertyEquipmentAllocation: '/api/PropertyEquipmentShare/ExportPropertyEquipmentAllocation',
        /** 查詢可新增共用設備財產清單資料 */
        post_QueryAllocationPropertyList: '/api/PropertyEquipmentShare/QueryAllocationPropertyList',
        /** 新增共用設備財產拆分資料 (自動依拆分方式更新分配比例及成本金額) */
        post_InsertPropertyEquipmentAllocation: '/api/PropertyEquipmentShare/InsertPropertyEquipmentAllocation',
        /** 取得某個共用設備財產拆分資料 (正式資料) @param {guid} */
        get_GetPropertyEquipmentAllocationByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentAllocationByKey/',
        /** 取得某個共用設備財產拆分資料 (暫存資料) @param {guid} */
        get_GetPropertyEquipmentAllocationTempByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentAllocationTempByKey/',
        /** 更新共用設備財產拆分資料 */
        put_UpdatePropertyEquipmentAllocation: '/api/PropertyEquipmentShare/UpdatePropertyEquipmentAllocation',
        /** 刪除共用設備財產拆分資料 */
        delete_DeletePropertyEquipmentAllocation: '/api/PropertyEquipmentShare/DeletePropertyEquipmentAllocation',
        /** 查詢共用設備重分類記錄 (分頁查詢) */
        post_QueryPropertyEquipmentShareTransLogPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentShareTransLogPage',
        /** 查詢共用設備重分類記錄 暫存資料 (分頁查詢) */
        post_QueryPropertyEquipmentShareTransLogTempPage: '/api/PropertyEquipmentShare/QueryPropertyEquipmentShareTransLogTempPage',
        /** 匯出共用設備重分類記錄 */
        post_ExportPropertyEquipmentShareTransLog: '/api/PropertyEquipmentShare/ExportPropertyEquipmentShareTransLog',
        /** 新增共用設備重分類記錄 */
        post_InsertPropertyEquipmentShareTransLog: '/api/PropertyEquipmentShare/InsertPropertyEquipmentShareTransLog',
        /** 取得某個共用設備重分類記錄 (正式資料) @param {key} */
        get_GetPropertyEquipmentShareTransLogByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareTransLogByKey/',
        /** 取得某個共用設備重分類記錄 (暫存資料) @param {key} */
        get_GetPropertyEquipmentShareTransLogTempByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareTransLogTempByKey/',
        /** 以共用設備識別碼取得全部才編資料 (暫存資料) @param {shareEquipID} */
        get_GetAccountNoShareList: '/api/PropertyEquipmentShare/GetAccountNoShareList/',
        /** 取得某個共用設備處分記錄 (正式資料) @param {shareId} */
        get_GetPropertyEquipmentShareDealLogByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareDealLogByKey/',
        /** 取得某個共用設備處分記錄 (暫存資料) @parma {shareId} */
        get_GetPropertyEquipmentShareDealLogTempByKey: '/api/PropertyEquipmentShare/GetPropertyEquipmentShareDealLogTempByKey/',
        /** 修改資料 - 新增共用設備處分記錄 */
        post_EditPropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/EditPropertyEquipmentShareDealLog',
        /** 儲存資料 - 新增共用設備處分記錄 */
        post_SavePropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/SavePropertyEquipmentShareDealLog',
        /** 取得流程中的資料 - 共用設備處分記錄 @param {itemKey} */
        get_GetInFlowPropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/GetInFlowPropertyEquipmentShareDealLog/',
        /** 送出流程 - 共用設備處分記錄 */
        post_SubmitPropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/SubmitPropertyEquipmentShareDealLog',
        /** 取消編輯 - 共用設備處分記錄 */
        post_CancelPropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/CancelPropertyEquipmentShareDealLog',
        /** 執行覆核 - 共用設備處分記錄 */
        post_ReviewPropertyEquipmentShareDealLog: '/api/PropertyEquipmentShare/ReviewPropertyEquipmentShareDealLog'
      },
      PropertyAccImport: {
        /** 上傳分帳表資料匯入檔 */
        post_UploadPropertyAccImport: '/api/PropertyAccImport/UploadPropertyAccImport',
        /** 查詢分帳表匯入批次資料(分頁查詢) */
        post_QueryPropertyAccImportBatchPage: '/api/PropertyAccImport/QueryPropertyAccImportBatchPage',
        /** 查詢分帳表某個批次匯入明細 @param importBatch 匯入批號  */
        get_GetPropertyAccImportBatchRecord: '/api/PropertyAccImport/GetPropertyAccImportBatchRecord/',
        /** 查詢分帳表地號明細資料(分頁查詢) */
        post_QueryPropertyAccImportLandPage: '/api/PropertyAccImport/QueryPropertyAccImportLandPage',
        /** 查詢分帳表建物明細資料(分頁查詢) */
        post_QueryPropertyAccImportBuildPage: '/api/PropertyAccImport/QueryPropertyAccImportBuildPage',
        /** 查詢分帳表財產明細資料(分頁查詢) */
        post_QueryPropertyAccImportPropertyPage: '/api/PropertyAccImport/QueryPropertyAccImportPropertyPage',
        /** 查詢分帳表共用設備明細資料(分頁查詢) */
        post_QueryPropertyAccImportEquipmentSharePage: '/api/PropertyAccImport/QueryPropertyAccImportEquipmentSharePage',
        /** 查詢分帳表設備明細資料(分頁查詢) */
        post_QueryPropertyAccImportPropertyEquipmentPage: '/api/PropertyAccImport/QueryPropertyAccImportPropertyEquipmentPage',
        /** 更新匯入帳務表明細檔資料狀態(Y/N) */
        put_UpdatePropertyAccImportDetail: '/api/PropertyAccImport/UpdatePropertyAccImportDetail',
        /** 刪除分帳表匯入批次資料(批次覆核狀態為[未送覆核]或[退回經辦]，才能刪除) */
        delete_DeletePropertyAccImport: '/api/PropertyAccImport/DeletePropertyAccImport',
        /** 取得流程中的資料 @param importBatch 匯入批號 */
        get_GetInFlowPropertyAccImportBatch: '/api/PropertyAccImport/GetInFlowPropertyAccImportBatch/',
        /** 儲存登記日期(土地登記日期(Date01);建物登記日期(Date02)) */
        put_SavePropertyAccImportRegisterDates: '/api/PropertyAccImport/SavePropertyAccImportRegisterDates',
        /** 送出流程(匯入分帳表資料) */
        post_SubmitPropertyAccImport: '/api/PropertyAccImport/SubmitPropertyAccImport',
        /** 執行覆核(匯入分帳表資料) */
        post_ReviewPropertyAccImport: '/api/PropertyAccImport/ReviewPropertyAccImport',
        /** 列印入產單 */
        post_ExportArchivePropertyAccImport: '/api/PropertyAccImport/ExportArchivePropertyAccImport',
        /** 取得某個地號暫存資料(匯入分帳表財產管理頁籤使用) @param {ptLKey} */
        get_GetPropertyLandTempByKeyPtAccImport: '/api/PropertyAccImport/GetPropertyLandTempByKeyPtAccImport/',
        /** 取得某個建號暫存資料(匯入分帳表財產管理頁籤使用) @param {ptBKey} */
        get_GetPropertyBuildTempByKeyPtAccImport: '/api/PropertyAccImport/GetPropertyBuildTempByKeyPtAccImport/',
        /** 取得某個成本暫存資料(匯入分帳表財產管理頁籤使用) @param {costGUID} */
        get_GetPropertyCostTempByKeyPtAccImport: '/api/PropertyAccImport/GetPropertyCostTempByKeyPtAccImport/',
        /** 取得某個停車位暫存資料(匯入分帳表財產管理頁籤使用) @param {ptPKey} */
        get_GetPropertyParkingTempByKeyPtAccImport: '/api/PropertyAccImport/GetPropertyParkingTempByKeyPtAccImport/',
        /** 查詢地號暫存資料(分頁查詢)(匯入分帳表財產管理頁籤使用) */
        post_QueryPropertyLandTempPageAccImport: '/api/PropertyAccImport/QueryPropertyLandTempPageAccImport',
        /** 匯出地號暫存查詢資料(匯入分帳表財產管理頁籤使用) */
        post_ExportQueryPropertyLandTempAccImport: '/api/PropertyAccImport/ExportQueryPropertyLandTempAccImport',
        /** 查詢建號暫存資料(分頁查詢)(匯入分帳表財產管理頁籤使用) */
        post_QueryPropertyBuildTempPageAccImport: '/api/PropertyAccImport/QueryPropertyBuildTempPageAccImport',
        /** 匯出建號暫存查詢資料(匯入分帳表財產管理頁籤使用) */
        post_ExportQueryPropertyBuildTempAccImport: '/api/PropertyAccImport/ExportQueryPropertyBuildTempAccImport',
        /** 查詢停車位暫存資料(分頁查詢)(匯入分帳表財產管理頁籤使用) */
        post_QueryPropertyParkingTempPageAccImport: '/api/PropertyAccImport/QueryPropertyParkingTempPageAccImport',
        /** 匯出停車位暫存查詢資料(匯入分帳表財產管理頁籤使用) */
        post_ExportQueryPropertyParkingTempAccImport: '/api/PropertyAccImport/ExportQueryPropertyParkingTempAccImport',
        /** 查詢成本暫存資料(分頁查詢)(匯入分帳表財產管理頁籤使用) */
        post_QueryPropertyCostTempPageAccImport: '/api/PropertyAccImport/QueryPropertyCostTempPageAccImport',
        /** 匯出成本暫存查詢資料(匯入分帳表財產管理頁籤使用) */
        post_ExportQueryPropertyCostTempAccImport: '/api/PropertyAccImport/ExportQueryPropertyCostTempAccImport',
        /** 查詢共用設備暫存資料(分頁查詢)(匯入分帳表財產管理頁籤使用) */
        post_QueryPropertyEquipmentShareSplitTempPageAccImport: '/api/PropertyAccImport/QueryPropertyEquipmentShareSplitTempPageAccImport',
        /** 匯出共用設備暫存查詢資料(匯入分帳表財產管理頁籤使用) */
        post_ExportQueryPropertyEquipmentShareSplitTempAccImport: '/api/PropertyAccImport/ExportQueryPropertyEquipmentShareSplitTempAccImport'
      },
      PMDataRPT: {
        /** @description RPT501 各大樓需求申請件數統計報表 */
        post_ExportRPT501: '/api/PMDataRPT/ExportRPT501',
        /** @description RPT502 各大樓需求申請項目明細表 */
        post_ExportRPT502: '/api/PMDataRPT/ExportRPT502',
        /** @description RPT503 廠商資料 */
        post_ExportRPT503: '/api/PMDataRPT/ExportRPT503',
        /** @description RPT504 各大樓年度工作計畫表 */
        post_ExportRPT504: '/api/PMDataRPT/ExportRPT504'
      },
      PropertyRPT: {
        /** @description RPT101 土地明細表 */
        post_ExportRPT101: '/api/PropertyRPT/ExportRPT101',
        /** @description RPT102 折舊月報表 */
        post_ExportRPT102: '/api/PropertyRPT/ExportRPT102',
        /** @description RPT103 投資報酬率明細表 */
        post_ExportRPT103: '/api/PropertyRPT/ExportRPT103',
        /** @description RPT301 財產收益比率表 */
        post_ExportRPT301: '/api/PropertyRPT/ExportRPT301',
        /** @description RPT302 價值與租金收益比率表 */
        post_ExportRPT302: '/api/PropertyRPT/ExportRPT302',
        /** @description RPT303 新預警月報表 */
        post_ExportRPT303: '/api/PropertyRPT/ExportRPT303',
        /** @description  RPT304 投資用與自用比例表 */
        post_ExportRPT304: '/api/PropertyRPT/ExportRPT304',
        /** @description  RPT305 不動產月結表 */
        post_ExportRPT305: '/api/PropertyRPT/ExportRPT305',
        /** @description  RPT306 投資用預估市值帳面價值比較 */
        post_ExportRPT306: '/api/PropertyRPT/ExportRPT306',
        /** @description  RPT307 稅務資料明細表 */
        post_ExportRPT307: '/api/PropertyRPT/ExportRPT307'
      },
      ReceiptPrint: {
        /** @description 查詢收據列印資料(收據管理-分頁查詢) */
        post_QueryReceiptPrintPage: '/api/ReceiptPrint/QueryReceiptPrintPage',
        /** @description 查詢收據列印資料(收據管理-分頁查詢-歷史資料) */
        post_QueryReceiptPrintPageHistory: '/api/ReceiptPrint/QueryReceiptPrintPageHistory',
        /** @description 整批匯出收據(收據管理) */
        post_ExportBatchQueryReceiptPrint: '/api/ReceiptPrint/ExportBatchQueryReceiptPrint',
        /** @description 匯出收據(勾選)(收據管理) */
        post_ExportSelectedQueryReceiptPrint: '/api/ReceiptPrint/ExportSelectedQueryReceiptPrint',
        /** @description 查詢收據重印資料(收據重印管理-分頁查詢) */
        post_QueryReceiptRePrintPage: '/api/ReceiptPrint/QueryReceiptRePrintPage',
        /** @description 匯出收據重印資料查詢資料(收據重印管理-分頁匯出) */
        post_ExportSelectedQueryReceiptRePrint: '/api/ReceiptPrint/ExportSelectedQueryReceiptRePrint',
        /** @description 新增收據列印資料(收據重印管理) */
        post_InsertReceiptPrint: '/api/ReceiptPrint/InsertReceiptPrint',
        /** @description 取得某個收據列印資料(收據重印管理) @param rpcKey 收據賃業資料編號 */
        get_GetReceiptPrintByKey: '/api/ReceiptPrint/GetReceiptPrintByKey/',
        /** @description 更新收據列印資料(收據重印管理) */
        put_UpdateReceiptPrint: '/api/ReceiptPrint/UpdateReceiptPrint',
        /** @description 刪除報表檔案 */
        delete_DeleteReportFile: '/api/ReceiptPrint/DeleteReportFile'
      },
      ReportFile: {
        /** @description 查詢報表檔案資料(分頁查詢) */
        post_QueryReportFilePage: '/api/ReportFile/QueryReportFilePage',
        /** @description 匯出報表檔案資料 */
        post_ExportQueryReportFile: '/api/ReportFile/ExportQueryReportFile',
        /** @description 取得某個報表檔案資料 @param fileId 檔案GUID */
        get_GetReportFileByKey: '/api/ReportFile/GetReportFileByKey/',
        /** @description 新增報表檔案 */
        post_InsertReportFile: '/api/ReportFile/InsertReportFile',
        /** @description 更新報表檔案 */
        put_UpdateReportFile: '/api/ReportFile/UpdateReportFile',
        /** @description 刪除報表檔案 */
        delete_DeleteReportFile: '/api/ReportFile/DeleteReportFile',
        /** @description 上傳報表檔案 @param {fileGuid} 檔案Guid */
        post_UploadReportFile: '/api/ReportFile/UploadReportFile/',
        /** @description 下載文件檔案 @param {fileGuid} 檔案Guid */
        post_DownloadReportFile: '/api/ReportFile/DownloadReportFile/'
      },
      ReviewFlow: {
        /** @description 查詢首頁通知資料(分頁查詢) */
        post_QueryNotifyLogPage: '/api/ReviewFlow/QueryNotifyLogPage',
        /** @description 取得某個通知紀錄資料 @param logKey 通知紀錄主索引代號 */
        get_GetNotifyLogByKey: '/api/ReviewFlow/GetNotifyLogByKey/',
        /** @description 新增通知紀錄資料 */
        post_InsertNotifyLog: '/api/ReviewFlow/InsertNotifyLog',
        /** @description 更新通知資料為已讀取(多筆) */
        put_UpdateNotifyRead: '/api/ReviewFlow/UpdateNotifyRead',
        /** @description 查詢覆核流程資料(分頁查詢)(個人待辦使用) */
        post_QueryReviewFlowPage: '/api/ReviewFlow/QueryReviewFlowPage',
        /** @description 取得某個覆核流程資料 @param rvfKey 覆核流程主索引代號 */
        get_GetReviewFlowByKey: '/api/ReviewFlow/GetReviewFlowByKey/',
        /** @description 更新覆核流程資料 */
        put_UpdateReviewFlow: '/api/ReviewFlow/UpdateReviewFlow',
        /** @description 覆核流程管理查詢(分頁查詢)(覆核流程管理使用) */
        post_QueryReviewFlowManagePage: '/api/ReviewFlow/QueryReviewFlowManagePage',
        /** @description 將已覆核完成尚未拋轉傳票的流程退回經辦 */
        post_ReturnVoucherFlow: '/api/ReviewFlow/ReturnVoucherFlow',
        /** @description 匯出覆核流程管理查詢資料(覆核流程管理使用) */
        post_ExportReviewFlowManage: '/api/ReviewFlow/ExportReviewFlowManage',
        /** @description 取得覆核批次明細清單資料 @param batchKey 覆核流程主索引序號 */
        get_GetReviewBatchItemsList: '/api/ReviewFlow/GetReviewBatchItemsList/',
        /** @description 取得單筆覆核批次明細資料 @param rvbKey 主索引序號 */
        get_GetReviewBatchItemsByKey: '/api/ReviewFlow/GetReviewBatchItemsByKey/',
        /** @description 更新單筆覆核批次明細資料 */
        put_UpdateReviewBatchItemByKey: '/api/ReviewFlow/UpdateReviewBatchItemByKey',
        /** @description 查詢覆核紀錄資料(分頁查詢) */
        post_QueryReviewLogPage: '/api/ReviewFlow/QueryReviewLogPage',
        /** @description 匯出覆核記錄查詢資料 */
        post_ExportReviewLog: '/api/ReviewFlow/ExportReviewLog'
      },
      RoleFunction: {
        /** @description 查詢角色資料(分頁查詢) */
        post_QueryRoleProfilePage: '/api/RoleFunction/QueryRoleProfilePage',
        /** @description 取得某個角色資料及其功能設定清單資料 @param rid 角色代號 */
        get_GetRoleProfileById: '/api/RoleFunction/GetRoleProfileById/',
        /** @description 取得功能下拉選項資料 */
        get_GetFunctionList: '/api/RoleFunction/GetFunctionList',
        /** @description 取得所有功能清單資料 */
        get_GetAllFunctions: '/api/RoleFunction/GetAllFunctions',
        /** @description 新增資料 */
        post_InsertRoleProfile: '/api/RoleFunction/InsertRoleProfile',
        /** @description 更新角色資料 */
        put_UpdateRoleProfile: '/api/RoleFunction/UpdateRoleProfile',
        /** @description 匯出角色查詢資料 */
        post_ExportQueryRoleProfile: '/api/RoleFunction/ExportQueryRoleProfile',
        /** @description 取得模組下拉選項資料 */
        get_GetModuleList: '/api/RoleFunction/GetModuleList',
        /** @description 查詢功能資料(分頁查詢) */
        post_QueryFunctionProfilePage: '/api/RoleFunction/QueryFunctionProfilePage',
        /** @description 匯出功能查詢資料 */
        post_ExportQueryFunctionProfile: '/api/RoleFunction/ExportQueryFunctionProfile',
        /** @description 查詢角色業務權限資料(分頁查詢) */
        post_QueryRoleBusinessPage: '/api/RoleFunction/QueryRoleBusinessPage',
        /** @description 匯出角色業務權限查詢資料 */
        post_ExportQueryRoleBusiness: '/api/RoleFunction/ExportQueryRoleBusiness',
        /** @description 取得某個角色業務權限資料 @param rid 角色代號 */
        get_GetRoleBusinessById: '/api/RoleFunction/GetRoleBusinessById/',
        /** @description 更新角色業務權限資料 */
        put_UpdateRoleBusiness: '/api/RoleFunction/UpdateRoleBusiness',
        /** @description 取得某一筆角色的權限設定資料 @param rid 角色代號 */
        get_GetRoleFunctionsById: '/api/RoleFunction/GetRoleFunctionsById/'
      },
      SpecificRemind: {
        /** @description 查詢特殊提醒設定資料(分頁查詢) */
        post_QuerySpecificRemindPage: '/api/SpecificRemind/QuerySpecificRemindPage',
        /** @description 匯出特殊提醒設定查詢資料 */
        post_ExportQuerySpecificRemind: '/api/SpecificRemind/ExportQuerySpecificRemind',
        /** @description 取得某個特殊提醒設定資料 @param skey 特殊提醒設定編號 */
        get_GetSpecificRemindByKey: '/api/SpecificRemind/GetSpecificRemindByKey/',
        /** @description 新增特殊提醒設定資料 */
        post_InsertSpecificRemind: '/api/SpecificRemind/InsertSpecificRemind',
        /** @description 更新特殊提醒設定資料 */
        put_UpdateSpecificRemind: '/api/SpecificRemind/UpdateSpecificRemind',
        /** @description 刪除特殊提醒設定資料 (鑑價資料維護用到此筆特殊提醒設定的資料，則不能刪除) */
        delete_DeleteSpecificRemind: '/api/SpecificRemind/DeleteSpecificRemind'
      },
      STKHRPT: {
        /** @description RPT201 關係人折舊費用期間報表 */
        post_ExportRPT201: '/api/STKHRPT/ExportRPT201',
        /** @description RPT202 關係人資產月報表 */
        post_ExportRPT202: '/api/STKHRPT/ExportRPT202',
        /** @description RPT203 關係人地價稅明細表 */
        post_ExportRPT203: '/api/STKHRPT/ExportRPT203',
        /** @description RPT204 關係人房屋稅明細表 */
        post_ExportRPT204: '/api/STKHRPT/ExportRPT204',
        /** @description RPT205 關係人土地報表 */
        post_ExportRPT205: '/api/STKHRPT/ExportRPT205',
        /** @description RPT404 關係人租金收入期間表 */
        post_ExportRPT404: '/api/STKHRPT/ExportRPT404'
      },
      SystemData: {
        /** @description 取得部門下拉選項資料 */
        get_GetDepartmentList: '/api/SystemData/GetDepartmentList',
        /** @description 取得角色下拉選項資料 */
        get_GetRoleList: '/api/SystemData/GetRoleList',
        /** @description 取得資料設定下拉選項資料 @param group 群組名稱 */
        get_GetDataProfileList: '/api/SystemData/GetDataProfileList/',
        /** @description 取得某個項目資料 @param group 群組名稱 @parm item 項目名稱 */
        get_GetDataProfileById: '/api/SystemData/GetDataProfileById/',
        /** @description 查詢部門資料(分頁查詢) */
        post_QueryDepartmentPage: '/api/SystemData/QueryDepartmentPage',
        /** @description 匯出部門查詢資料 */
        post_ExportQueryDepartment: '/api/SystemData/ExportQueryDepartment',
        /** @description 取得某個部門資料 @param deptId 部門代號 */
        get_GetDepartmentById: '/api/SystemData/GetDepartmentById/',
        /** @description 新增部門資料 */
        post_InsertDepartment: '/api/SystemData/InsertDepartment',
        /** @description 更新部門資料 */
        put_UpdateDepartment: '/api/SystemData/UpdateDepartment',
        /** @description 查詢系統帳號管理權限表(分頁查詢) */
        post_QueryReportAccoutPage: '/api/SystemData/QueryReportAccoutPage',
        /** @description 匯出查詢系統帳號管理權限表 */
        post_ExportQueryReportAccount: '/api/SystemData/ExportQueryReportAccount',
        /** @description 查詢角色功能權限對應表(分頁查詢) */
        post_QueryReportRoleFunctionPage: '/api/SystemData/QueryReportRoleFunctionPage',
        /** @description 匯出查詢角色功能權限對應表 */
        post_ExportQueryReportRoleFunction: '/api/SystemData/ExportQueryReportRoleFunction',
        /** @description 查詢角色業務權限對應表(分頁查詢) */
        post_QueryReportRoleBusinessPage: '/api/SystemData/QueryReportRoleBusinessPage',
        /** @description 匯出查詢角色業務權限對應表 */
        post_ExportQueryReportRoleBusiness: '/api/SystemData/ExportQueryReportRoleBusiness',
        /** @description 查詢使用者稽核記錄(分頁查詢) */
        post_QueryUserAuditLogPage: '/api/SystemData/QueryUserAuditLogPage',
        /** @description 匯出查詢使用者稽核記錄 */
        post_ExportQueryUserAuditLog: '/api/SystemData/ExportQueryUserAuditLog',
        /** @description 取得某個使用者修改記錄資料 @param logKey 資料序號 */
        get_GetUserModifyLogByKey: '/api/SystemData/GetUserModifyLogByKey/'
      },
      SystemParameter: {
        /** @description 查詢系統參數資料(分頁查詢) */
        post_QuerySystemParameterPage: '/api/SystemParameter/QuerySystemParameterPage',
        /** @description 匯出系統參數查詢資料 */
        post_ExportQuerySystemParameter: '/api/SystemParameter/ExportQuerySystemParameter',
        /** @description 取得某個選項來源資料 @param group 參數群組 @param name 參數名稱 */
        get_GetSystemParameterByKey: '/api/SystemParameter/GetSystemParameterByKey/',
        /** @description 更新資料 */
        put_UpdateSystemParameter: '/api/SystemParameter/UpdateSystemParameter',
        /** @description 查詢通知群組資料(分頁查詢) */
        post_QueryNotifyGroupPage: '/api/SystemParameter/QueryNotifyGroupPage',
        /** @description 取得某個通知群組資料及其使用者設定清單資料 @param ntype 群組類型 @param nid 群組代碼 */
        get_GetNotifyGroupByKey: '/api/SystemParameter/GetNotifyGroupByKey/',
        /** @description 新增通知群組資料 */
        post_InsertNotifyGroup: '/api/SystemParameter/InsertNotifyGroup',
        /** @description 更新通知群組資料 */
        put_UpdateNotifyGroup: '/api/SystemParameter/UpdateNotifyGroup',
        /** @description 匯出通知群組查詢資料 */
        post_ExportQueryNotifyGroup: '/api/SystemParameter/ExportQueryNotifyGroup',
        /** @description 匯出通知群組使用者查詢資料 */
        post_ExportQueryyNotifyGroupUsers: '/api/SystemParameter/ExportQueryyNotifyGroupUsers',
        /** @description 取得所有啟用中的使用者資料 */
        get_GetAllActiveUsers: '/api/SystemParameter/GetAllActiveUsers',
        /** @description 取得一般下拉選項資料 @param optionSource 選項來源 */
        get_GetOptionList: '/api/SystemParameter/GetOptionList/',
        /** @description 依選項類型取得選項群組下拉選項資料 @param sourceType 選項類型 */
        get_GetOptionGroupList: '/api/SystemParameter/GetOptionGroupList/',
        /** @description 查詢選項來源資料(分頁查詢) */
        post_QueryOptionSourcePage: '/api/SystemParameter/QueryOptionSourcePage',
        /** @description 匯出選項來源查詢資料 */
        post_ExportQueryOptionSource: '/api/SystemParameter/ExportQueryOptionSource',
        /** @description 取得某個選項來源資料 @param ogroup 選項來源群組代號 @param oid 選項代號 */
        get_GetOptionSourceByKey: '/api/SystemParameter/GetOptionSourceByKey/',
        /** @description 新增資料 */
        post_InsertOptionSource: '/api/SystemParameter/InsertOptionSource',
        /** @description 更新資料 */
        put_UpdateOptionSource: '/api/SystemParameter/UpdateOptionSource',
        /** @description 查詢郵遞區號資料(分頁查詢) */
        post_QueryZipCodePage: '/api/SystemParameter/QueryZipCodePage',
        /** @description 查詢建號資料(分頁查詢) */
        post_QueryPageAddBuild: '/api/PropertyDetail/QueryPageAddBuild',
        /** @description 查詢地號資料(分頁查詢) */
        post_QueryPageAddLand: '/api/PropertyDetail/QueryPageAddLand'
      },
      SystemSession: {
        /** @description 登入系統 */
        post_Login: '/api/SystemSession/Login'
      },
      SystemTask: {
        /** @description 執行系統任務 */
        post_ExecuteSystemTask: '/api/SystemTask/ExecuteSystemTask'
      },
      UserProfile: {
        /** @description 查詢使用者資料(分頁查詢) */
        post_QueryUserProfilePage: '/api/UserProfile/QueryUserProfilePage',
        /** @description 取得某個使用者資料 @param uid 使用者代號 */
        get_GetUserProfileById: '/api/UserProfile/GetUserProfileById/',
        /** @description 新增資料 */
        post_InsertUserProfile: '/api/UserProfile/InsertUserProfile',
        /** @description 更新資料 */
        put_UpdateUserProfile: '/api/UserProfile/UpdateUserProfile',
        /** @description 匯出使用者查詢資料 */
        post_ExportQuery: '/api/UserProfile/ExportQuery',
        /** @description 取得擁有覆核權限的使用者下拉選單 */
        get_GetCanAprroveUserList: '/api/UserProfile/GetCanAprroveUserList',
        /** @description 移轉覆核人員 */
        put_TransferApproveUser: '/api/UserProfile/TransferApproveUser',
        /** @description 查詢代理人資料(分頁查詢) */
        post_QueryUserAgentPage: '/api/UserProfile/QueryUserAgentPage',
        /** @description 取得某個代理人資料 @param key 資料序號 */
        get_GetUserAgentByKey: '/api/UserProfile/GetUserAgentByKey/',
        /** @description 新增代理人資料 */
        post_InsertUserAgent: '/api/UserProfile/InsertUserAgent',
        /** @description 更新代理人資料 */
        put_UpdateUserAgent: '/api/UserProfile/UpdateUserAgent',
        /** @description 匯出代理人查詢資料 */
        post_ExportQueryUserAgent: '/api/UserProfile/ExportQueryUserAgent',
        /** @description 取得全部使用者(包含未啟用)下拉選單 @param exclude 排除使用者代號 */
        get_GetAllUserList: '/api/UserProfile/GetAllUserList/',
        /** @description 取得啟用中使用者下拉選單 @param exclude 排除使用者代號 */
        get_GetActiveUserList: '/api/UserProfile/GetActiveUserList/',
        /** @description 刪除代理人資料 */
        delete_DeleteUserAgent: '/api/UserProfile/DeleteUserAgent'
      },
      Voucher: {
        /** @description 取得某個傳票帳務類別群組快速選取選項資料 @param groupid 傳票帳務類別群組編號 */
        get_GetAccTypeQuickMenuByGroupID: '/api/Voucher/GetAccTypeQuickMenuByGroupID/',
        /** @description 查詢 傳票主檔資料 (分頁查詢) */
        post_QueryVoucherMainPage: '/api/Voucher/QueryVoucherMainPage',
        /** @description 匯出 傳票主檔資料查詢資料 */
        post_ExportQueryVoucherMain: '/api/Voucher/ExportQueryVoucherMain',
        /** @description 取得 某個傳票主檔資料 */
        post_GetVoucherMainByKey: '/api/Voucher/GetVoucherMainByKey/',
        /** @description 查詢 傳票明細資料 (分頁查詢) */
        post_QueryVoucherDetailPage: '/api/Voucher/QueryVoucherDetailPage',
        /** @description 匯出 傳票明細資料查詢資料 */
        post_ExportQueryVoucherDetail: '/api/Voucher/ExportQueryVoucherDetail',

        /** @description 其他帳務處理-查詢批次傳票主檔資料 (分頁查詢) */
        post_QueryVoucherOtherBatchPage: '/api/Voucher/QueryVoucherOtherBatchPage',
        /** @description 其他帳務處理-匯出傳票主檔批次查詢資料 */
        post_ExportQueryVoucherOtherBatch: '/api/Voucher/ExportQueryVoucherOtherBatch',
        /** @description 其他帳務處理-查詢傳票主檔資料 (分頁查詢) */
        post_QueryVoucherOtherMainPage: '/api/Voucher/QueryVoucherOtherMainPage',
        /** @description 其他帳務處理-匯出傳票主檔查詢資料 */
        post_ExportQueryVoucherOtherMain: '/api/Voucher/ExportQueryVoucherOtherMain',
        /** @description 其他帳務處理-新增傳票主檔資料 */
        post_InsertVoucherMain: '/api/Voucher/InsertVoucherMain',
        /** @description 其他帳務處理-取消編輯 */
        delete_CancelVoucherBatch: '/api/Voucher/CancelVoucherBatch',
        /** @description 其他帳務處理-更新傳票主檔資料 */
        put_UpdateVoucherMain: '/api/Voucher/UpdateVoucherMain',
        /** @description 其他帳務處理-查詢傳票明細資料(暫存) (分頁查詢) */
        post_QueryVoucherDetailOtherPage: '/api/Voucher/QueryVoucherDetailOtherPage',
        /** @description 其他帳務處理-查詢傳票明細資料(正式) (分頁查詢) */
        post_QueryVoucherDetailOtherPageFormal: '/api/Voucher/QueryVoucherDetailOtherPageFormal',
        /** @description 其他帳務處理-匯出傳票明細資料查詢資料(暫存) */
        post_ExportQueryVoucherDetailOther: '/api/Voucher/ExportQueryVoucherDetailOther',
        /** @description 其他帳務處理-匯出傳票明細資料查詢資料(正式) */
        post_ExportQueryVoucherDetailOtherFormal: '/api/Voucher/ExportQueryVoucherDetailOtherFormal',
        /** @description 其他帳務處理-新增傳票明細資料 */
        post_InsertVoucherDetail: '/api/Voucher/InsertVoucherDetail',
        /** @description 其他帳務處理-更新傳票明細資料 */
        put_UpdateVoucherDetail: '/api/Voucher/UpdateVoucherDetail',
        /** @description 其他帳務處理-刪除傳票明細資料 */
        delete_DeleteVoucherDetail: '/api/Voucher/DeleteVoucherDetail',
        /** @description 其他帳務處理-送出流程 */
        post_SubmitVoucher: '/api/Voucher/SubmitVoucher',
        /** @description 其他帳務處理-執行覆核 */
        post_ReviewVoucher: '/api/Voucher/ReviewVoucher',
        /** @description 其他帳務處理-傳票迴轉 */
        put_ReturnVoucherMain: '/api/Voucher/ReturnVoucherMain',
        /** @description 其他帳務處理-上傳傳票資料匯入檔 */
        post_UploadVoucherImport: '/api/Voucher/UploadVoucherImport',
        /** @description 其他帳務處理-取得流程中的資料 @param voBatch 匯入批號 */
        get_GetInFlowVoucherBatch: '/api/Voucher/GetInFlowVoucherBatch/',
        /** @description 其他帳務處理-列印傳票(整批列印) */
        post_PrintVoucher: '/api/Voucher/PrintVoucher',
        /** @description 其他帳務處理-列印傳票(單筆暫存列印) */
        post_ExportSingleVoucherTemp: '/api/Voucher/ExportSingleVoucherTemp',
        /** @description 其他帳務處理-列印傳票(單筆正式列印) */
        post_ExportSingleVoucherFormal: '/api/Voucher/ExportSingleVoucherFormal',
        /** @description 其他帳務處理-取得合約編號關聯第一筆財產編號資料 @param contractNop 合約編號 */
        get_GetContractFirstProperty: '/api/Voucher/GetContractFirstProperty/',
        /** @description 其他帳務處理-取得某個傳票主檔資料(暫存) @param vomKey 傳票主檔資料編號 */
        get_GetVoucherMainByKeyOther: '/api/Voucher/GetVoucherMainByKeyOther/',
        /** @description 其他帳務處理-取得某個傳票主檔資料(正式) @param vomKey 傳票主檔資料編號 */
        get_GetVoucherMainByKeyOtherFormal: '/api/Voucher/GetVoucherMainByKeyOtherFormal/',
        /** @description 其他帳務處理-取得某個傳票明細資料(暫存) @param vodKey 傳票明細資料編號 */
        get_GetVoucherDetailByKeyOther: '/api/Voucher/GetVoucherDetailByKeyOther/',
        /** @description 其他帳務處理-取得某個傳票明細資料(正式) @param vodKey 傳票明細資料編號 */
        get_GetVoucherDetailByKeyOtherFormal: '/api/Voucher/GetVoucherDetailByKeyOtherFormal/'
      },
      WriteOffLog: {
        /** @description 查詢收款沖銷批次 (分頁查詢) */
        post_QueryWOFBatchPage: '/api/WriteOffLog/QueryWOFBatchPage',
        /** @description 建立收款沖銷批次 */
        post_CreateWOFBatch: '/api/WriteOffLog/CreateWOFBatch',
        /** @description 取得沖銷批次資料 @param {itemKey}批次號碼 */
        get_GetWOFBatch: '/api/WriteOffLog/GetWOFBatch/',
        /** @description 更新沖銷批次處理人員 */
        post_UpdateWOFBatchProcessor: '/api/WriteOffLog/UpdateWOFBatchProcessor',
        /** @description 送出流程 */
        post_SubmitWOFBatch: '/api/WriteOffLog/SubmitWOFBatch',
        /** @description 刪除批次（取消編輯） */
        delete_DeleteWOFBatch: '/api/WriteOffLog/DeleteWOFBatch',
        /** @description 執行覆核 */
        post_ReviewWOFBatch: '/api/WriteOffLog/ReviewWOFBatch',
        /** @description 查詢沖銷紀錄（分頁查詢） */
        post_QueryWriteOffLogPage: '/api/WriteOffLog/QueryWriteOffLogPage',
        /** @description 匯出沖銷紀錄 */
        post_ExportWriteOffLog: '/api/WriteOffLog/ExportWriteOffLog',
        /** @description 取得某筆沖銷紀錄資料  @param {key} */
        get_GetWriteOffLogByKey: '/api/WriteOffLog/GetWriteOffLogByKey/',
        /** @description 刪除沖銷紀錄 */
        delete_DeleteWriteOffLog: '/api/WriteOffLog/DeleteWriteOffLog',
        /** @description 查詢未沖銷暫收款 （分頁查詢） */
        post_QueryWOFTempReceiptPage: '/api/WriteOffLog/QueryWOFTempReceiptPage',
        /** @description 未沖銷立帳資料比對查詢 （分頁查詢） */
        post_QueryFNDMatchPage: '/api/WriteOffLog/QueryFNDMatchPage',
        /** @description 執行沖銷 */
        post_InsertWOFList: '/api/WriteOffLog/InsertWOFList'
      }
    }
  };
}
