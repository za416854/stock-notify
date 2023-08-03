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
    /** @description 首頁 */
    home: { url: 'home', name: '首頁' },
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
      TaiwanStock: {
        get_GetTaiwanMarket: 'https:' + '//localhost:44376/api/TaiwanMarket',
      }
    }
  };
}
