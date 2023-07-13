/** 錯誤訊息 */
export enum ValidatorsString {
  empty = '不得為空',
  maxLength = '超過長度',
  mustInteger = '必需為整數',
  mustNumber = '必需為數字',
  mustNumAndLetter = '需為英、數字',
  mustCharAndLetter = '需為中、英文',
  mustChar = '必須為中文',
  emailError = 'Email格式有誤',
  numberFormat = '數字格式有誤',
  mustGreaterOrEqual = '需大於等於',
  mustGreater = '需大於',
  mustLesserOrEqual = '需小於等於',
  mustLesser = '需小於',
  notOverLength = '不超過',
  chooseOne = '需擇一填入'
}

/**
 * @description Alert Icon 種類
 * @export
 * @enum {number}
 */
export enum _ALERT_ICON_TYPE {
  成功 = 'success',
  錯誤 = 'error',
  警告 = 'warning',
  資訊 = 'info',
  詢問 = 'question'
}

/** Alert 訊息 */
export enum AlertMessages {
  caseIsEdit = '案件正在編輯中，不可重複編輯',
  caseIsUse = '資料已在使用中，無法刪除',
  atOneData = '請選擇一筆資料',
  atLeastOneData = '至少選擇一筆資料',
  confirmReLoad = '是否重新匯入',
  confirmDelete = '是否確定刪除',
  docUploadSuccess = '檔案上傳成功',
  docUploadFail = '檔案上傳失敗',
  docDownloadFail= '檔案下載失敗',
  docImportSuccess = '檔案匯入成功',
  docImportFail = '檔案匯入失敗',
  docFormateError = '檔案格式錯誤',
  saveSuccess = '儲存成功',
  saveFail = '儲存失敗',
  updateFail = '修改失敗',
  deleteSuccess = '刪除成功',
  deleteFail = '刪除失敗',
  isCancelEdit = '是否取消編輯，並刪除該筆資料',
  transSuccess = '移轉成功',
  transFail = '移轉失敗',
  loginFail = '登入失敗',
  queryFail = '查詢錯誤',
  paramError = '傳入參數不正確',
  sendSuccess = '案件送出成功',
  sendFail = '案件送出失敗',
  caseReject = '案件退回經辦成功',
  caseApprove = '案件覆核成功',
  notifyCloseSuccess = '提醒關閉成功',
  notCaseOwner = '非案件擁有人，不可重匯',
  notSaveIsClose = '尚未儲存，是否關閉',
  notSelectEquipmentProperty = '尚未選擇相關設備財產',
  onlySelectOneData = '只能選取一筆資料',
  noContractModifyCase = '該案件為非異動中合約',
  notFlowStatus_notReImport = '流程狀態錯誤，不可重匯',
  notFlowStatus_notDelete = '流程狀態錯誤，不可刪除',
  overHoldTotalPN = '單位坪數加總已超過財產持有坪數，是否確定儲存',
  hasXblnr = '此筆傳票有發票資訊<br/>若要執行發票折讓，請至發票管理執行',
  notReturn = '此筆資料不可執行退回',
  isLogout = '已即將逾時，是否繼續保留或登出',
  notAcceptFile = '非允許上傳之檔案，請重新選取',
  confirmReturn = '確定退回',
  executeSuccess = '執行成功',
  executeFail = '執行失敗'
}

export enum AlertButton {
  confirmButtonText = '確定',
  cancelButtonText = '取消',
  confirmButtonText_Y = '是',
  cancelButtonText_N = '否',
  confirmButtonText_keep = '保留',
  cancelButtonText_logout = '登出'
}

/** 覆核抬頭 */
export enum _VERIFY_TITLE {
  verifyConfirm = '覆核確認',
  verifyBack = '覆核退回'
}

/** 覆核結果 */
export enum _VERIFY_RESULT {
  覆核確認 = 'A',
  退回經辦 = 'R'
}

/** 案件瀏覽模式 */
export enum _CASE_VIEWMODE {
  編輯 = 'edit',
  檢視 = 'view',
  覆核 = 'verify'
}

/** 案件儲存方式 */
export enum _SAVE_STATUS {
  新增 = 'insert',
  修改 = 'update'
}

/** 案件來源模式 (配合案件瀏覽模式使用) */
export enum _CASE_FROMMODE {
  正式 = 'formal',
  暫存 = 'temp',
  匯入分帳表 = 'propertyAcc'
}

/** 系統功能 */
export enum _FUNCTION_ID {
  待辦 = 'SYS100',
  台股資訊 = 'TW101',
  地號維護 = 'PRO101',
  建號維護 = 'PRO102',
  財產管理 = 'PRO103',

}

/**
 * @description 通用資料設定
 * @export
 * @enum {number}
 */
export enum _DATA_PROFILE {
  部門資料 = 'Department',
  文件類型 = 'DocClass',
  流程狀態 = 'FlowStatus',
  使用者稽核紀錄類型 = 'LogActionType',
  通知類型 = 'NotifyType',
  選項來源類型 = 'OptionSourceType',
  系統參數群組名稱 = 'ParmGroupName',
  系統參數數值型態 = 'ParmValueType',
  覆核類型 = 'ReviewType'
}

/** 選項來源設定 */
export enum _OPTION_SOURCE {
  傳票帳務類別 = 'ACCType',
  傳票帳務類別群組 = 'ACCTypeGroup',
  帳務收款類型 = 'AccCollectionType',
  資產類別_待轉售 = 'ANPropertyTypeD',
  資產編號第一碼_性質 = 'ANCode1',
  資產編號第二碼_種類 = 'ANCode2',
  資產編號第三碼_使用目的 = 'ANCode3',
  資產編號第六碼_重大組成 = 'ANCode6',
  資產編號連結類型 = 'ANLinkType',
  調整方式 = 'AdjustWay',
  財產類型 = 'AssetsType',
  建物類型 = 'BuildingType',
  案件類型 = 'CaseType',
  票據區域別 = 'CheckRegion',
  票據狀態 = 'CheckStatus',
  擔保品形式 = 'CollateralType',
  指定帳號 = 'CollectionAccount',
  指定帳戶 = 'CollectionBank',
  收款週期 = 'CollectionCycle',
  收款方式 = 'CollectionWay',
  共同使用類型 = 'CommonUseType',
  合約異動類型 = 'ContractModifyType',
  合約狀態 = 'ContractStatus',
  合約類型 = 'ContractType',
  國家 = 'CountryCode',
  持有資產幣別 = 'CurrencyCode',
  處分狀態 = 'DealStatus',
  處分類型 = 'DealType',
  折舊類型 = 'DepreciationType',
  權狀狀態 = 'DroitStatus',
  耐用年限類型 = 'DurabilityType',
  文件類型說明 = 'DocCategory',
  工程別 = 'Engineering',
  上傳檔案副檔名 = 'FileExtension',
  取得方式 = 'GetType',
  群體個案 = 'GroupIndivual',
  發票類型 = 'InvoiceType',
  區域 = 'Location',
  管理費計算方式 = 'ManageBilling',
  任務代碼 = 'ManualTaskID',
  保證金類型 = 'MarginType',
  通知客戶方式 = 'NotifyWay',
  大樓管理組織 = 'OrganizationType',
  車位清潔費計算方式 = 'ParkingBilling',
  停車位來源 = 'ParkingSourceType',
  支出類別 = 'PayType',
  計畫狀態 = 'PlanStatus',
  財產分類 = 'PropertyType',
  財產狀態 = 'PropertyStatus',
  資產分類 = 'PropertyType',
  維護類型 = 'RepairLevel',
  報修狀態 = 'RepairStatus',
  案件項目別 = 'RepairType',
  登記原因 = 'RegisterReason',
  收據類型 = 'ReceiptType',
  收據狀態 = 'ReceiptStatus',
  重估成本類型 = 'RevaluationCost',
  重估減損類別 = 'RevaluationType',
  賣方關係人 = 'SellStakeholder',
  共用設備重大組成 = 'ShareComponent',
  共用設備樓層代號 = 'ShareFloor',
  關係人類別 = 'StakeholderType',
  標的類型 = 'TargetType',
  稅務類型 = 'TaxType',
  帳收款類型 = 'TMRType',
  使用分區 = 'UseArea',
  使用地類別 = 'UseType',
  總帳傳票發票狀態 = 'VOInvoiceStatus',
  總帳會計科目提示訊息 = 'VOMessage',
  總帳傳票稅碼 = 'VOTaxCode',
  總帳會計科目 = 'VOTitle',
  所屬區域 = 'ZipCode'
}

/** 系統參數設定-參數群組 */
export enum _SYSTEM_PARAMETER_GROUP {
  資料清理 = 'HouseKeeping',
  自動通知 = 'AutoNotify',
  排程作業 = 'ScheduleJob',
  預設值 = 'DefaultSetting',
  總帳設定 = 'AccountSetting'
}

/** 系統參數設定-資料清理-參數名稱 */
export enum _HOUSEKEEPING_PARAMETER {
  使用者稽核記錄保留天數 = 'AuditLogKeepDays'
}

/** 系統參數設定-自動通知-參數名稱 */
export enum _AUTONOTIFY_PARAMETER {
  轉列摧收逾期天數 = 'BADExpireDays',
  租賃合約終止前天數 = 'CONBeforeTM',
  保證品到期前天數 = 'MRNBeforeTM',
  物管合約終止前天數 = 'PMGBeforeTM',
  物管報修逾期天數 = 'PMGExpireDays',
  物管大樓維護到期前天數 = 'PMGPlanDays'
}

/** 系統參數設定-排程作業-參數名稱 */
export enum _SCHEDULEJOB_PARAMETER {

}

/** 系統參數設定-預設值-參數名稱 */
export enum _ACCOUNTSETTING_PARAMETER {
  成本中心代碼 = 'KOSTL01',
  利潤中心代碼 = 'PRCTR01'
}

/** 系統參數設定-預設值-參數名稱 */
export enum _DEFAULTSETTING_PARAMETER {
  預設的修繕處理日數 = 'PMGRepairDays'
}



/** 發送通知群組類型 */
export enum _NOTIFY_GROUP {
  系統 = 'S',
  自訂 = 'C'
}

/** API 回應 return Code */
export enum _RETURN_CODE {
  成功 = '0000'
}

/** 合約類型 */
export enum _CONTRACT_TYPE {
  房屋 = '01',
  房屋_附車位 = '02',
  停車位 = '03',
  廣告 = '04'
}

/** 合約狀態 */
export enum _CONTRACT_STATUS {
  建立中 = '01',
  有效 = '02',
  到期 = '03',
  終止 = '04'
}

/** 租金調整方式 */
export enum _ADJUST_WAY {
  固定比例 = '01',
  固定金額 = '02'
}

/** 處分狀態 */
export enum _DEAL_STATUS {
  未處分 = 'N',
  出售 = 'S',
  報廢 = 'D'
}

/** 覆核類型 */
export enum _REVIEW_TYPE {
  地號 = 'BASES01',
  建號 = 'BASES02',
  財產管理 = 'BASEM04',
  財產處理 = 'BASEM11',
  合約管理 = 'RENTM02',
  合約異動 = 'RENTM04',
  匯入分帳表 = 'PROPIMP',
  匯入地價稅 = 'LANDTAX',
  匯入房屋稅 = 'BULDTAX',
  共用設備維護 = 'SHAREQP',
  共用設備處理 = 'SHAREDL',
  重置增添 = 'REMVADD',
  部分重分類 = 'PARTREC',
  租金立帳 = 'RENTSET',
  保證金立帳 = 'MARGSET',
  保證金設算息立帳 = 'INTRSET',
  管理費立帳 = 'MGMBSET',
  車位清潔費立帳 = 'PRKBSET',
  水電瓦斯費立帳 = 'WEGBSET',
  員工停車費立帳 = 'EMPBSET',
  收款沖銷作業 = 'CLCFSET',
  其他帳務處理 = 'HANDVOU'
}

/** 流程狀態 */
export enum _FLOW_STATUS {
  未送覆核 = 'C',
  待覆核中 = 'W',
  退回經辦 = 'R',
  結束流程 = 'E',
  刪除流程 = 'D',
}

/** 文件類型 */
export enum _DOC_CLASS {
  土地 = 'LAND',
  建物 = 'BULD',
  財產 = 'PROP',
  合約 = 'CONT',
  大樓 = 'LGBU',
  請修繕案件 = 'PMRP',
  年度工作計畫 = 'PMLM'
}

/** 拆分方式 */
export enum _SPLIT_WAY {
  依持有面積 = '01',
  依購入成本 = '02',
  自行輸入 = '03'
}

/** 稅務類型 */
export enum _TAX_TYPE {
  房屋稅預備金 = '01',
  房屋稅 = '02',
  地價稅預備金 = '03',
  地價稅 = '04',
  房屋稅暫收款 = '05',
  地價稅暫收款 = '06',
}

/** 建物類型 */
export enum _BUILDING_TYPE {
  主建物 = '01',
  附屬建物 = '02',
  空地 = '03',
  停車場 = '04',
  未完工程 = '05'
}

/** 財產分類 */
export enum _PROPERTY_TYPE {
  自用 = '01',
  投資 = '02',
  承受擔保品 = '03'
}

/** 使用目的 */
export enum _ACCOUNT_USAGE {
  自用 = 'S',
  投資 = 'I'
}

/** 設備類型 */
export enum _EQUIPMENT_TYPE {
  設備 = '0',
  設備修繕 = '1',
  建物修繕 = '2',
}

/** 重大組成 */
export enum _SHARE_COMPONENT {
  電機 = '2',
  空調 = '3',
  電梯 = '4',
  消防 = '5',
  房屋改良 = '6'
}

/** 財產狀態 */
export enum _PROPERTY_STATUS {
  購入 = '01',
  待出租 = '02',
  已出租 = '03',
  報廢 = '04',
  出售 = '05',
  終止 = '06'
}

/** 處理對象 */
export enum _DEAL_PROPERTY {
  主財產 = 'P',
  附屬設備 = 'E'
}

/** 處理對象 */
export enum _DEAL_TYPE {
  出售 = 'SA',
  報廢 = 'SC'
}

/** 發票狀態 */
export enum _VO_INVOICE_STATUS {
  開立發票 = '0',
  折讓 = '1',
  作廢 = '2',
  無發票 = 'Z'
}

/** api回傳-發票狀態 */
export enum _API_RETURN_INVOICE_STATUS {
  未使用 = 'N',
  以使用 = 'Y',
  作廢 = 'D',
  折讓 = 'R'
}

/** api回傳-課稅別 */
export enum _API_RETURN_TAX_TYPE {
  應稅外加 = '1',
  零稅率 = '2',
  免稅 = '3',
  作廢 = 'D'
}

/** 收據管理-查詢方式 */
export enum _QUERY_MODE {
  查詢 = '01',
  歷史收據查詢 = '02'
}

/** 暫收款類型 */
export enum _TMR_TYPE {
  專戶 = 'B',
  支票 = 'C'
}

/** 報表代號名稱 */
export enum _REPORT_ID {
  // 財產
  土地明細表 = 'RPT101',
  折舊月報表 = 'RPT102',
  投資報酬率明細表 = 'RPT103',
  自用投資用合併管理報表 = 'RPT301',
  價值與租金收益比率表 = 'RPT302',
  預警月報表 = 'RPT303',
  投資用與自用比例表 = 'RPT304',
  不動產月結表 = 'RPT305',
  投資用預估市值帳面價值比較表 = 'RPT306',
  稅務資料明細表 = 'RPT307',
  // 關係人
  關係人折舊費用期間表 = 'RPT201',
  關係人資產月報表 = 'RPT202',
  關係人地價稅明細表 = 'RPT203',
  關係人房屋稅明細表 = 'RPT204',
  關係人土地報表 = 'RPT205',
  關係人租金收入期間報表 = 'RPT404',
  // 合約
  預估五年租金明細表 = 'RPT401',
  租金收入月報表 = 'RPT402',
  租金收款明細表 = 'RPT403',
  租金平準化明細表 = 'RPT405',
  應收未收明細表 = 'RPT406',
  IFRS租金直線法攤銷表 = 'RPT407',
  保證金印花稅彙整 = 'RPT408',
  保證金_保證品明細表 = 'RPT409',
  // 物管
  各大樓需求申請件數統計報表 = 'RPT501',
  各大樓需求申請項目明細表 = 'RPT502',
  廠商資料 = 'RPT503',
  各大樓年度工作計劃表 = 'RPT504',
}

/** 表單選取類型 */
export enum _CHECK_WAY {
  單筆 = 'S',
  多筆 = 'M'
}

/** 鍵盤按鍵 */
export enum _CLICK_DOWN {
  ENTER = 'Enter' // Enter鍵
}

/** 比較類型 */
export enum _COMPARE {
  大於 = 'moreThan',
  小於 = 'lessThan',
  等於 = 'equal'
}
