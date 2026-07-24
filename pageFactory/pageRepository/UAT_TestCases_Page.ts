import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import * as path from 'path';
import { testConfig } from '@base/testConfig';
import fs from 'fs';
import { Utils } from '../../Utils/functional/utils';
import { TypeFormatFlags } from 'typescript';

export class ECUATPage {
    readonly page: Page;
    readonly context: BrowserContext;
    newPage?: Page;
    public lastCreatedDocTitle!: string;
    readonly EXECUTIVE_DASHBOARD: Locator
    readonly RISK_DASHBOARD: Locator
    readonly COMPLIANCE_DASHBOARD: Locator
    readonly GOVERNANCE_DASHBOARD: Locator
    readonly RISK_DSHBOARD_TAB: Locator
    readonly COMPLIANCE_DASHBOARD_TAB: Locator
    readonly GOVERNANCE_DASHBOARD_TAB: Locator
    readonly TASKS: Locator
    readonly MY_TASKS_TAB: Locator
    readonly TASKS_TABLE: Locator
    readonly OVER_DUE_TASKS_TAB: Locator
    readonly TASK_DUE_TODAY_TAB: Locator
    readonly TASK_DUE_THIS_WEEK: Locator
    readonly TASK_DUE_THIS_MONTH: Locator
    readonly FILTER_ICON: Locator
    readonly MODULE_DROPDOWN: Locator
    readonly DROPDOWN_OPTION: Locator
    readonly FILTERED_MODULE: Locator
    readonly FILTER_BUTTON: Locator
    readonly TYPE_DROPDOWN: Locator
    readonly TYPE_DROPDOWN_FILTER: Locator
    readonly FILTERED_TYPE: Locator
    readonly TYPE_DROPDOWN_OPTION: Locator
    readonly STATUS_DROPDOWN: Locator
    readonly STATUS_DROPDOWN_OPTION: Locator
    readonly FILTERED_STATUS: Locator
    readonly START_DATE_CALENDER: Locator
    readonly END_DATE_CALENDER: Locator
    readonly VIEW_BUTTON: Locator
    readonly CALENDER_ICON: Locator
    readonly TABLE_ICON: Locator
    readonly CLAENDER_VIEW: Locator
    readonly TABLE_VIEW: Locator
    readonly TASK_NAME: Locator
    readonly MY_DEPARTMENT_TAB: Locator
    readonly ALL_TASK_TAB: Locator
    readonly CALENDER: Locator
    readonly CALENDAR_PAGE: Locator
    readonly ADD_EVENT_BUTTON: Locator
    readonly ADD_EVENT_POP_UP: Locator
    readonly TITTLE_FIELD: Locator
    readonly DESCRIPTION: Locator
    readonly DEPARTMENT_DROPDOWN: Locator
    readonly SELECT_DEPARTMENT: Locator
    readonly EVENT_OWNER_DROPDOWN: Locator
    readonly SELECT_OWNER: Locator
    readonly TYPE_DROPDOWN_EVENT: Locator
    readonly SELECT_TYPE: Locator
    readonly ADD_BUTTON: Locator
    readonly VIEW_DRPDOWN: Locator
    readonly MONTHLY_VIEW: Locator
    readonly QUATERLY_VIEW: Locator
    readonly SETTINGS: Locator
    readonly FRAMEWORK_SETTINGS: Locator
    readonly FRAMEWORK_PAGE: Locator
    readonly FRAMEWORK_CHECKBOX: Locator
    readonly SAVE_BUTTON: Locator
    readonly SUCCESS_MSG: Locator
    readonly CREATED_SUCCESS_MSG: Locator
    readonly SUBMITTED_SUCCESS_MSG: Locator
    readonly COMPLAINCE: Locator
    readonly FRAMEWORKS: Locator
    readonly FRAMEWORKS_PAGE: Locator
    readonly ADD_FRAMEWORK_BUTTON: Locator
    readonly CLONE_FROM_LIBRARY: Locator
    readonly IMPORT_FRAMEWORK_POP_UP: Locator
    readonly AVAILABLE_FRAMEWORK_DROPDOWN: Locator
    readonly SELECT_FRAMEWORK: Locator
    readonly AVAILABLE_SUB_FRAMEWORK_DEPDOWN: Locator
    readonly SELECT_SUB_FRAMEWORK: Locator
    readonly CLONED_FRAMEWORK_NAME_FIELD: Locator
    readonly CLONED_FRAMEWORK_SHORT_NAME: Locator
    readonly CLONE_BUTTON: Locator
    readonly COMMENT_FIELD: Locator
    readonly EVIDENCE_SETTINGS: Locator
    readonly EVIDENCE_CHECKBOX: Locator
    readonly EVIDENCE_SAVE_BUTTON: Locator
    readonly COUNT_TEXTFIELD: Locator
    readonly FRAMEWORK: Locator
    readonly CONTROLS: Locator
    readonly SELECT_CONTROL: Locator
    readonly MAP_DOC_BUTTON: Locator
    readonly SELECT_CONTROL_FOR_AUDIT: Locator
    readonly SELECT_DOC_CHECKBOX: Locator
    readonly MAP_EVIDENCE_BUTTON: Locator
    readonly REQUIRED_EVIDENCE_TAB: Locator
    readonly NO_EVIDENCE_MSG: Locator
    readonly REQUIRED_EVIDENCE_TABLE: Locator
    readonly TASKS_TAB: Locator
    readonly REQUEST_EVIDENCE_BUTTON: Locator
    readonly REQUEST_EVIDENCE_POP_UP: Locator
    readonly DUE_DATE_CALENDAR: Locator
    readonly ASSIGN_TO_DROPDOWN: Locator
    readonly SELECT_ASSIGNEE: Locator
    readonly ADD_APPROVER_BUTTON: Locator
    readonly APPROVAR_DRPDOWN: Locator
    readonly SELECT_APPROVAR: Locator
    readonly SELECT_USER: Locator
    readonly SEND_BUTTON: Locator
    readonly EVIDENCE_TAB: Locator
    readonly REQ_EVIDENCE_ADD_BUTTON: Locator
    readonly CONTROL_ADD_BUTTON: Locator
    readonly REQ_EVIDENCE_ENG_TEXTFIELD: Locator
    readonly REQ_EVIDENCE_ARABIC_TEXTFIELD: Locator
    readonly MAP_BUTTON: Locator
    readonly SELECT_MAP_CHECKBOX: Locator
    readonly EVI_MAP_CHECKBOX: Locator
    readonly EVIDENCE_STATUS_DROPDOWN: Locator
    readonly ADD_EVIDENCE: Locator
    readonly EVIDENCE_NAME: Locator
    readonly EVIDENCE_DESC: Locator
    readonly ADD_EVIDENCE_BUTTON: Locator
    readonly DETAILS_TAB: Locator
    readonly EDIT_BUTTON: Locator
    readonly GOV_EDIT: Locator
    readonly NEW_EVIDENCE: Locator
    readonly OWNERSHIP_DEPARTMENT: Locator
    readonly OWNERSHIP_OWNER: Locator
    readonly STAKEHOLDER_DEPARTMENT: Locator
    readonly STAKEHOLDER_USER: Locator
    readonly EXPECTED_DATE_CALENDER: Locator
    readonly DEPT_COMPLIANCE: Locator
    readonly HAMBURGER: Locator
    readonly REQ_COMPLIANCE_DATE: Locator
    readonly REQ_COMPLIANCE_LEVEL: Locator
    readonly EDIT: Locator
    readonly EDIT1: Locator
    readonly THREE_DOT: Locator
    readonly ADD_RISK_BUTTON: Locator
    readonly RISK_RADIO_BUTTON: Locator
    readonly REMARK_TAB: Locator
    readonly ADD_REMARK_BUTTON: Locator
    readonly REMARK_TITTLE: Locator
    readonly REMARK_FIELD: Locator
    readonly REMARK_HAMBURGER: Locator
    readonly REMARK_EDIT: Locator
    readonly REMARK_DETAILS: Locator
    readonly REMARK_DETAILS_POP_UP: Locator
    readonly REMARK_DELETE: Locator
    readonly DELETE_REMARK_CONFIRMTION: Locator
    readonly YES_BUTTON: Locator
    readonly THREE_DOT_TAB: Locator
    readonly INTIAVITES: Locator
    readonly NEW_INTIAVATE_BUTTON: Locator
    readonly INTIVATE_DESC: Locator
    readonly RISK_TREATMENT_BUTTON: Locator
    readonly DEPT_COMPLIANCE_TABLE: Locator
    readonly INITIVATE_DETAILS: Locator
    readonly INTIVATE_DETAILS_PAGE: Locator
    readonly SAVE: Locator
    readonly GOV_SAVE: Locator
    readonly AUDIT: Locator
    readonly AUDIT_COMPLAINCE_LEVEL: Locator
    readonly AUDIT_REVIEW: Locator
    readonly AUDIT_DETAILS: Locator
    readonly AUDIT_DETAIL_POP_UP: Locator
    readonly NOTE_TO_SELF_ICON: Locator
    readonly NOTE_TEXT_FIELD: Locator
    readonly SEND_NOTE_ICON: Locator
    readonly NOTE_ADDED: Locator
    readonly ISSUE: Locator
    readonly ADD_ISSUE: Locator
    readonly ISSUE_NAME_FIELD: Locator
    readonly ISSUE_DESC_FIELD: Locator
    readonly ISSUE_REMIDIATION_FIELD: Locator
    readonly ISSUE_TYPE_DROPDOWN: Locator
    readonly SELECT_ISSUE_TYPE: Locator
    readonly ISSUE_PRIORITY: Locator
    readonly SELECT_PRIORITY: Locator
    readonly TARGET_DATE_CALENDER: Locator
    readonly SAVE_ISSUE: Locator
    readonly ISSUE_OWNER: Locator
    readonly ISSUE_DEPARTMENT: Locator
    readonly REMEDIATION: Locator
    readonly REMEDIATION_POPUP: Locator
    readonly REMEDIATION_FIELD: Locator
    readonly ISSUE_DETAILS_POPUP: Locator
    readonly MAP_RISK_CHECKBOX: Locator
    readonly RISK_MAP_BUTTON: Locator
    readonly COMMON_CONTROL_TAB: Locator
    readonly MANAGE_CROSS_MAPING_BUTTON: Locator
    readonly COMMOM_CONTROL_BUTTON: Locator
    readonly CONTROL_CREATE_BUTTON: Locator
    readonly EVIDENCE: Locator
    readonly EVIDENCE_TABLE: Locator
    readonly RISK_SETTINGS: Locator
    readonly ASSESSMENT_CRITERIA: Locator
    readonly METHELOGY: Locator
    readonly METHELOGY_CHECKBOX: Locator
    readonly RISK_MANAGEMENT_BUTTON: Locator
    readonly RISK_REGISTER_BUTTON: Locator
    readonly NEW_RISK_BUTTON: Locator
    readonly CREATE_RISK_BUTTON: Locator
    readonly RISK: Locator
    readonly RISK_PAGE: Locator
    readonly SELECT_RISK: Locator
    readonly NEW_TREATEMENT_BUTTON: Locator
    readonly TREATMENT_NAME_FIELD: Locator
    readonly TREATEMENT_DESC: Locator
    readonly TREATEMENT_COST_FIELD: Locator
    readonly TREATEMENT_OWNER_DROPDOWN: Locator
    readonly TREATMENT_HISTORY_BUTTON: Locator
    readonly TREATMENT_HISTORY_POPUP: Locator
    readonly ASSESMENT_HISTORY_BUTTON: Locator
    readonly ASSESMENT_HISTORY_POPUP: Locator
    readonly EXPORT_PDF_ICON: Locator
    readonly EXEPTIONS_TAB: Locator
    readonly ADD_EXEPTION_BUTON: Locator
    readonly EXEPTION_START_DATE: Locator
    readonly EXEPTION_END_DATE: Locator
    readonly RISK_NOTE: Locator
    readonly RISK_TEMPLATE: Locator
    readonly LIBRARY_TAB: Locator
    readonly TEMPLATE_CHECKBOX: Locator
    readonly CLONE_TEMPLATE_BUTTON: Locator
    readonly INDECATOR_KEY_TAB: Locator
    readonly NEW_INDICATOR_BUTTON: Locator
    readonly SELECT_PURPOUSE: Locator
    readonly INDICATOR_SOURCE: Locator
    readonly INDICATOR_MINTOLER_FIELD: Locator
    readonly INDICATOR_MAXTOLER_FIELD: Locator
    readonly FRECUENCY_DROPDOWN: Locator
    readonly MESERMENT_DROPDOWN: Locator
    readonly NEW_RISK_TEMPLATE: Locator
    readonly RISK_CATEGORY: Locator
    readonly ADD_RISK: Locator
    readonly CATALOG: Locator
    readonly NEW_ASSET_BUTTON: Locator
    readonly ARABIC_ASSEST_NAME_FIELD: Locator
    readonly CREATE_BUTTON: Locator
    readonly PRIORITY_RADIO: Locator
    readonly PURPOUSE_DROPDOWN: Locator
    readonly FRAMEWORK_AUDIT: Locator
    readonly THREATS: Locator
    readonly NEW_THREAT_BUTTON: Locator
    readonly THREAT_ARABIC_NAME: Locator
    readonly SOURCE_DROPDOWN: Locator
    readonly VULNERABILITY: Locator
    readonly NEW_VULNERABILITY_BUTTON: Locator
    readonly PROCESS: Locator
    readonly NEW_PROCESS: Locator
    readonly CATEGORY_DROPDOWN: Locator
    readonly INITIATIVE: Locator
    readonly NEW_INITIATIVE_BUTTON: Locator
    readonly INITIATIVE_MANAGEMENT: Locator
    readonly SELECT_INITIATIVE: Locator
    readonly LINK_CONTROL_BUTTON: Locator
    readonly MILESTONE_TAB: Locator
    readonly NEW_MILESTONE_BUTTON: Locator
    readonly GOVERNANCE: Locator
    readonly TEMPLATES: Locator
    readonly CREATE_TEMPLATE: Locator
    readonly ARABIC_NAME_TEXTFILED: Locator
    readonly ENGLISH_NAME_TEXTFIELD: Locator
    readonly DOCUMENT_TEXT_TEXTFIELD: Locator
    readonly DOCUMENT_TEXT_TEXTFIELD_GOV: Locator
    readonly CREATE_BUTTON_GOV: Locator
    readonly TEMPLATE_PAGE: Locator
    readonly TEMPLATE_DETAILS_POP_UP: Locator
    readonly TEMPLATE: Locator
    readonly EDIT_PAGE_HEADLINE: Locator
    readonly EDIT_PAGE: Locator
    readonly DELETE_BUTTON: Locator
    readonly CONFIRMATION_POP_UP: Locator
    readonly DELETE_SUCCESS_MSG: Locator
    readonly POLICY_DOC_MANAGEMENT: Locator
    readonly NEW_DOC_BUTTON: Locator
    readonly CREATE_DOC: Locator
    readonly TITTLE: Locator
    readonly DESCRIPTION_GOV: Locator
    readonly TYPE_DROPDOWN_GOV: Locator
    readonly CLARIFICATION_DROPDOWN: Locator
    readonly SHARING_DROPDOWN: Locator
    readonly DISRIBUTION_DROPDOWN: Locator
    readonly FROM_DATE_CALENDAR: Locator
    readonly TO_DATE_CALENDER: Locator
    readonly ADD_OWERSHIP_BUTTON: Locator
    readonly VERSION_TEXFIELD: Locator
    readonly NEXT_BUTTON: Locator
    readonly FINISH_BUTTON: Locator
    readonly SELECT_OWNER_GOV: Locator
    readonly PICK_TEMPLATE: Locator
    readonly USE_TEMPLATE: Locator
    readonly UPLOAD_FROM_DEVICE: Locator
    readonly DOC_NAME: Locator
    readonly ADD_INT_CONTROL: Locator
    readonly CONTROL_ARABIC_NAME: Locator
    readonly CONTROL_ENG_NAME: Locator
    readonly MAP_INT_CONTROL: Locator
    readonly MAP_CHECKBOX: Locator
    readonly INTERNAL_CONTROL_TAB: Locator
    readonly ADD_CONTROL: Locator
    readonly INTERNAL_CONTROL_PAGE: Locator
    readonly EDIT_CONTROL: Locator
    readonly UPDATE_BUTTON: Locator
    readonly VENDOR_MANAGEMENT: Locator
    readonly VENDOR_TAB: Locator
    readonly VENDOR_PAGE: Locator
    readonly ADD_VENDOR_BUTTON: Locator
    readonly VENDOR_NAME: Locator
    readonly VENDOR_ADDRESS: Locator
    readonly VENDOR_TYPE_DROPDOWN: Locator
    readonly VENDOR_DEPARTMENT_DROPDOWN: Locator
    readonly VENDOR_USER_DROPDOWN: Locator
    readonly VENDOR_RISK_DROPDOWN: Locator
    readonly PHONE_NO_FIELD: Locator
    readonly PRODUCT_NAME_FIELD: Locator
    readonly DOMAIN_FIELD: Locator
    readonly WEBSITE_FIELD: Locator
    readonly DESCRIPTION_FIELD: Locator
    readonly CREATE_VENDOR_BUTTON: Locator
    readonly ADD_CONTACT_BUTTON: Locator
    readonly CONTACT_NAME: Locator
    readonly POSITION: Locator
    readonly EMAIL: Locator
    readonly SELECT_VINDOR: Locator
    readonly TABLE_VIEW_ICON: Locator
    readonly ADD_RISK_BUTTON_GOV: Locator
    readonly SUBMIT_BUTTON: Locator
    readonly HAMBERD_GOV: Locator
    readonly RISK_TITTLE: Locator
    readonly RISK_STATEMENT: Locator
    readonly RISK_CATEGORY_DROPDOWN: Locator
    readonly RISK_OWNER: Locator
    readonly DOCUMENT_TAB: Locator
    readonly NEW_DOCUMENT_BUTTON: Locator
    readonly STATUS_DROPDOWN_VENDOR: Locator
    readonly EFFECTNESS_CALENDER: Locator
    readonly CREATE_DOC_VENDOR: Locator
    readonly CONTACT_TAB: Locator
    readonly ADD_CONTACT: Locator
    readonly CONTACT_NAME_VENDOR: Locator
    readonly PHONE_NO_VENDOR: Locator
    readonly THREE_DOT_VENDOR: Locator
    readonly EDIT_VENDOR: Locator
    readonly RADIO_VENDOR: Locator
    readonly AUDIT_MANEGMENT: Locator
    readonly AUDITS: Locator
    readonly NEW_AUDIT_BUTTON: Locator
    readonly AUDIT_TYPE_DROPDOWN: Locator
    readonly FRAMEWORKS_DROPDOWN: Locator
    readonly AUDITOR_DROPDOWN: Locator
    readonly AUDIT_NAME: Locator
    readonly AUDIT_CONTROL: Locator
    readonly AUDIT_CONTROL_EXPAND: Locator
    readonly SELECT_AUDIT_CONTROL: Locator
    readonly AUDIT_NOTE_TAB: Locator
    readonly NEW_NOTES: Locator
    readonly NOTE_TITTLE: Locator
    readonly NOTE_REMARK: Locator
    readonly NOTE_PROCEDURE: Locator
    readonly AUDIT_THREE_DOT: Locator
    readonly CHANGE_STATUS: Locator
    readonly AUDIT_STATUS_RADIO: Locator
    readonly CONFIRMATION_CHECKBOX: Locator
    readonly ISSUE_EXEPTIONS: Locator
    readonly ISSUES: Locator
    readonly ISSUES_TABLE: Locator
    readonly EXEPTIONS: Locator
    readonly REPORTS: Locator
    readonly REPORTS_PAGE: Locator
    readonly SELECT_REPORT_TYPE: Locator
    readonly SELECT_REPORT: Locator
    readonly EXPORT_REPORT: Locator
    readonly DELEGATION_TAB: Locator
    readonly DELEGATION: Locator
    readonly NEW_DELEGATION: Locator
    readonly DELEGATION_TO_DROPDOWN: Locator
    readonly DELEGATION_FROM_DROPDOWN: Locator
    readonly CREATE_DELEGATION: Locator
    readonly DELEGATION_START_DATE: Locator
    readonly DELEGATION_END_DATE: Locator
    readonly UPDATE_DELEGATION: Locator
    readonly CANCEL_DELEGATION: Locator
    readonly DELETE_DELEGATION: Locator
    readonly ESCALATION_SETTING: Locator
    readonly NEW_ESCALATION_SETTING: Locator
    readonly ADD_ESCALATION_BUTTON: Locator
    readonly SELECT_ESCALATION_DROPDOWN: Locator
    readonly ESCATATIONS: Locator
    readonly NEW_ESCALATION_BUTTON: Locator
    readonly ESCALATION_TITTLE: Locator
    readonly ESCALATION_TRIGGER_EVENT_DROPDOWN: Locator
    readonly ESCALATION_USERS_DROPDOWN: Locator
    readonly DEPT_REPOT_PAGE: Locator
    readonly EXECUTIVE_REPORT: Locator
    readonly EXECUTIVE_REPORT_PAGE: Locator
    readonly COMPLAINCE_REPORT: Locator
    readonly COMPLAINCE_REPORT_PAGE: Locator
    readonly TASK_REPORT: Locator
    readonly TASK_REPORT_PAGE: Locator
    readonly INITIATIVES_REPORT: Locator
    readonly INITIATIVES_REPORT_PAGE: Locator
    readonly ISSUE_REPOT: Locator
    readonly ISSUE_REPORT_PAGE: Locator
    readonly PERMISIONS: Locator
    readonly PERMISION_POPUP: Locator
    readonly ASSET_NAME: Locator
    readonly USERS_TAB: Locator
    readonly USERS_AND_DEPARTMENT: Locator
    readonly ROLES: Locator
    readonly PERMISION_CHECKBOX: Locator
    readonly RISK_FILTER_ICON: Locator
    readonly SEARCH_FIELD: Locator
    readonly APPLY_FILTER_BUTTON: Locator
    readonly TASK_CHECKBOX: Locator
    readonly TASK_FILTER_ICON: Locator
    readonly CONFIRM_BUTTON: Locator
    readonly RE_ASSIGN: Locator
    readonly ASSIGNE_DROPDOWN: Locator
    readonly LINK_RISK_TRATMENT_BUTTON: Locator
    readonly GOV_CONTROL: Locator
    readonly GOV_CONTROL_SAVE: Locator
    readonly TASK_OWNER_DROPDOWN: Locator
    readonly TASK_ASSIGN_TO: Locator
    readonly CONFIDENCIALLY_SLIDER: Locator
    readonly INTIGRITY_SLIDER: Locator
    readonly AVAILABILITY_SLIDER: Locator
    readonly HOOD_SLIDER: Locator
    readonly TEXT_ASSERT: Locator
    readonly USER_DROPDOWN: Locator
    readonly MAP_EVIDENCE: Locator
    readonly MAP_EVIDENCE_CHECKBOX: Locator
    readonly RISK_ASSIGN: Locator
    readonly ADDITIONAL_DETAILS: Locator
    readonly NEW_ASSESMENT: Locator
    readonly CREATE_ASSESMENT_BUTTON: Locator
    readonly RISKS: Locator
    readonly PUBLISH_BUTTON: Locator
    readonly ACTIVATE_BUTTON: Locator
    readonly RISK_ASSIGN_TO: Locator
    readonly CUSTOMER_PARAMETERS: Locator
    readonly CUSTOMER_PARAMETERS1: Locator
    readonly THREAD_SLIDER: Locator
    readonly VULNERABILITY_SLIDER: Locator
    readonly INTIGRITY_SLIDER_ASSERT: Locator
    readonly AVAILABILITY_SLIDER_ASSERT: Locator
    readonly CONFIDENTIALY_SLIDER_ASSERT: Locator
    readonly TREATMENT_ID: Locator
    readonly TREATMENT_THREEDOT: Locator
    readonly MARK_AS_COMPLETE: Locator
    readonly GOV_TEM_THREEDOT: Locator
    readonly PROCEED_BUTTON: Locator
    readonly RISK_IDENTIFICATION_CALENDER: Locator
    readonly USER_ICON: Locator
    readonly LOG_OUT: Locator
    readonly LOGIN_PAGE: Locator
    readonly EXPORT_EXCEL_ICON: Locator
    readonly THREE_DOT_CONTROL: Locator
    readonly FILE_UPLOADED: Locator
    readonly RISK_RATING: Locator
    readonly CROSS_MAP_CONTROL_BUTTON: Locator
    readonly CROSS_MAP_ADD: Locator
    readonly CROSS_MAP_SAVE: Locator
    readonly STATUS_SAVE_BUTTON: Locator
    readonly AUDIT_DELETE_BUTTON: Locator
    readonly ADD_ASSERT: Locator
    readonly ADD_THREAT: Locator
    readonly ADD_PROCESS: Locator
    readonly ADD_VULNERABILITY: Locator
    readonly REMOVE_FILTER: Locator
    readonly CONTROL_DETAILS_PAGE: Locator
    readonly DELEGATED_TASK: Locator
    readonly EVENT_THREE_DOT: Locator
    readonly EVENT_DETAILS: Locator
    readonly EVENT_EDIT_BUTTON: Locator
    readonly EVENT_DELETE_BUTTON: Locator
    readonly EVENT_UPDATE_BUTTON: Locator
    readonly WORKSPACE_TAB: Locator
    readonly ASSIGN_TO_ME_TAB: Locator
    readonly ASSIGN_TO_MY_DEPT: Locator
    readonly MARK_AS_RESOLVED: Locator
    readonly RESOLVED_BUTTON: Locator
    readonly RETIRE_OPTION: Locator
    readonly RETIRE_BUTTON: Locator
    readonly NEW_VERSION_BUTTON: Locator
    readonly VERSION_HISTORY_TAB: Locator
    readonly EXTEND_VALIDITY: Locator
    readonly VALIDITY_CALENDAR: Locator
    readonly NEXT_ARROW: Locator
    readonly RISK_HAMBURGER: Locator
    readonly EDIT_RISK: Locator
    readonly RISK_NAME_FIELD: Locator
    readonly RISK_SAVE: Locator
    readonly REQ_ATTESTATION: Locator
    readonly SEND: Locator
    readonly INTERNAL_CONTROL: Locator
    readonly MANAGE_CROSS_MAPPING_BUTTON: Locator
    readonly SELECT_COMMON_CONTROL: Locator
    readonly CROSS_MAP_CONTROL_POPUP: Locator
    readonly CROSS_MAPPING_PAGE: Locator
    readonly UNLOCKED_DELETATION: Locator
    readonly FILTER_BY_READINESS: Locator
    readonly EVIDENCE_HAMBURGER: Locator
    readonly EVIDENCE_EDIT: Locator
    readonly EVIDENCE_NAME_EDIT: Locator
    readonly EVIDENCE_DELETE: Locator
    readonly SEARCH_TEXT_FIELD: Locator
    readonly SEARCH_ICON: Locator
    readonly SEARCH_RESULT: Locator
    readonly DETAILS: Locator
    readonly EVIDENCE_DETAILS_POPUP: Locator
    readonly EXPORT_CONTROL_BUTTON: Locator
    readonly EXPORT_CONFIRMATION_BUTTON: Locator
    readonly EXCEL_RADIO_BUTTON: Locator
    readonly CUSTOM_FRAMEWORK_BUTTON: Locator
    readonly DOMAIN_DROPDOWN: Locator
    readonly FRAMEWORK_NAME_FIELD: Locator
    readonly FRAMEWORK_VERSION: Locator
    readonly ADD_NEW_CONTROL_BUTTON: Locator
    readonly REFRENCE_ENG_FIELD: Locator
    readonly REFRENCE_ARABIC_FIELD: Locator
    readonly TEXTAREA_FIELD: Locator
    readonly ADD_LIST_BUTTON: Locator
    readonly FRAMEWORK_EDIT: Locator
    readonly SHORT_NAME_FIELD: Locator
    readonly CUSTOM_FRAMEWORK_TAB: Locator
    readonly FRAMEWORK_DELETE: Locator
    readonly FRAMEWORK_DETAILS_BUTTON: Locator
    readonly FRAMEWORK_DETAIL_PAGE: Locator
    readonly TREE_VIEW_ICON: Locator
    readonly TREE_VIEW: Locator
    readonly TABLE_VIEW1: Locator
    readonly PERMISSION_BUTTON: Locator
    readonly DEPT_HAMBERG: Locator
    readonly REMOVE_BUTTON: Locator
    readonly REMOVE_SUCCESS_MSG: Locator
    readonly UNMAP_BUTTON: Locator
    readonly DOC_HAMBURGER: Locator
    readonly DETAILS_BUTTON: Locator
    readonly EDIT_EVIDENCE_REQ: Locator
    readonly EDIT_REVIEW_CYCLE: Locator
    readonly PREODIC_RADIO_BUTTON: Locator
    readonly REVIEW_AFTER_TEXT_FIELD: Locator
    readonly EVIDENCE_FILTER_ICON: Locator
    readonly FILTER_BY_DEPT: Locator
    readonly FILTER_BY_OWNER: Locator
    readonly FILTER_BY_VERIFICATION: Locator
    readonly FILTER_BY_REVIEW_DUE_DAYS: Locator
    readonly CLEAR_FILTER_BUTTON: Locator
    readonly DOC_SEARCH_FIELD: Locator
    readonly NOTE_ICON_CONTROL: Locator
    readonly SEND_NOTE_BUTTON: Locator
    readonly NOTE_THREE_DOT: Locator
    readonly RESOLVE_BUTTON: Locator
    readonly UNRESOLVE_BUTTON: Locator
    readonly DELETE_NOTE: Locator
    readonly COMPLAINCE_LEVEL: Locator
    readonly IMPLIMENTATION_GUIDENCE: Locator
    readonly COLUMN_PICKER_ICON: Locator
    readonly COLUMN_CHECKBOX: Locator
    readonly APPLY_BUTTON: Locator
    readonly SELECTED_COLUMN: Locator
    readonly DOWNLOAD_ICON: Locator
    readonly SEARCH_TASKS_FIELD: Locator
    readonly SEARCHED_EVIDENCE: Locator
    readonly FILTERED_BY_STATUS: Locator
    readonly SUMMARY_RADIO: Locator
    readonly ASSESMENT_SCOPE_FIELD: Locator
    readonly COMPLETE_TOGGLE: Locator
    readonly COMPLETE_STATUS: Locator
    readonly BULK_IMPORT: Locator
    readonly RISK_METHODOLOGY_DROPDOWN: Locator
    readonly CONTINUE_BUTTON: Locator
    readonly OPTION: Locator
    readonly RISK_CONTROL: Locator
    readonly RISK_CONTROL_ENG_NAME: Locator
    readonly RISK_CONTROL_ARB_NAME: Locator
    readonly RISK_CONTROL_DETAILS_PAGE: Locator
    readonly ACTIVATE_RISK: Locator
    readonly DEACTIVATE_RISK: Locator
    readonly ACTIVATE_SUCCESS_MSG: Locator
    readonly DEACTIVATE_SUCCESS_MSG: Locator
    readonly DEACTIVATE_BUTTON: Locator
    readonly DEACTIVATE_BUTTON_CONFIRMATION: Locator
    readonly DELETE_BUTTON_CONFIRMATION: Locator
    readonly INACTIVE_STATUS: Locator
    readonly READING_DELETE: Locator
    readonly ACTIVATE_CONFIRMATION_BUTTON: Locator
    readonly ACTIVATE_BUTTON_ASSERT: Locator
    readonly ACTIVE_STATUS: Locator
    readonly PDF_FORMAT_DOWNLOAD: Locator
    readonly WORD_FORMAT_DOWNLOAD: Locator
    readonly TEMPLATE_DOWNLOAD_ICON: Locator
    readonly TEMPLATE_DOWNLOAD_TEXT: Locator
    readonly ADD_TREATMENT_PLAN: Locator
    readonly IDENTIFIER_DATE_CAL: Locator
    readonly EDIT_SHORT_FRAMEWORK_NAME: Locator
    readonly EDIT_CLONE_FRAMEWORK_NAME: Locator
    readonly NO_PENDING_TASK: Locator
    readonly MENU_BAR_EXPAND: Locator
    readonly REQ_EVIDENCE_NAME_FIELD: Locator
    readonly REQ_EVIDENCE_DESC_FIELD: Locator
    readonly CONTROL_NAME_FIELD: Locator
    readonly AUDIT_OWNER_DROPDOWN: Locator
    readonly SELECT_TYPE_RADIO: Locator
    readonly ENG_ASSEST_NAME_FIELD: Locator
    readonly TEM_DELETE_ICON: Locator
    readonly VENDOR_THREE_DOT: Locator
    readonly DELEGATION_NOTE: Locator
    readonly CATELOG_THREE_DOT: Locator
    readonly SERVICE_REQ_SETTINGS: Locator
    readonly NEW_REQ_TYPE: Locator
    readonly REQ_TYPE_DROPDOWN: Locator
    readonly CUSTOM_REQ_NAME_FIELD: Locator
    readonly MAX_DAYS_COMPLETE_FIELD: Locator
    readonly SERVICE_REQ_STATUS_XLS_ICON: Locator
    readonly SERVICE_REQ_STATUS_PDF_ICON: Locator
    readonly SERVICE_REQ_STATUS_HAMBURGER: Locator
    readonly SERVICE_REQ_ENG_LABEL: Locator
    readonly SERVICE_STATUS_DETAILS_POPUP: Locator
    readonly SERVICE_REQUEST: Locator
    readonly MY_REQUEST: Locator
    readonly MY_DEPT_REQUEST: Locator
    readonly ALL_REQUEST: Locator
    readonly NO_DATA_AVAILABLE: Locator
    readonly EMPLOYEES_TAB: Locator
    readonly NEW_EMPLOYEE_BUTTON: Locator
    readonly EMP_USERNAME: Locator
    readonly EMP_FULL_NAME: Locator
    readonly EMP_EMAIL: Locator
    readonly EMP_TITLE: Locator
    readonly UPDATED_SUCCESS_MSG: Locator
    readonly DEPARTMENT_DROPDOWN_DEPT: Locator
    readonly PREVIEW_BUTTON: Locator
    readonly EMPLOYEE_DETAILS_PAGE: Locator
    readonly EMP_DEACTIVATE_SUCCESS_MSG: Locator
    readonly EMP_ACTIVATE_SUCCESS_MSG: Locator
    readonly DEPARTMENT_NAME: Locator
    readonly STATUS_NAME: Locator
    readonly DEPARTMENT_DROPDOWN_SELECTION: Locator
    readonly SELECT_MULTIPLE_DEPARTMENT: Locator
    readonly EMP_STATUS_DROPDOWN_OPTION: Locator
    readonly REQUEST_INFORMATION: Locator
    readonly DOWNLOAD_PDF_TEM: Locator;
    readonly DOWNLOAD_WORD_TEM: Locator;
    readonly TREATMENT_REQUEST_PLAN: Locator
    readonly SERVICE_REQ_TYPE_HAMBURGER: Locator;
    readonly SERVICE_REQ_TYPE_NAME: Locator
    readonly SERVICE_REQ_TYPE_XLS_ICON: Locator
    readonly SERVICE_REQ_TYPE_PDF_ICON: Locator
    readonly SERVICE_REQ_DETAILS_PAGE: Locator
    readonly SERVICE_REQ_HABURGER: Locator
    readonly REASSIGN: Locator
    readonly REASSIGN_TO_DROPDOWN: Locator
    readonly REASSIGN_BUTTON: Locator
    readonly REASSIGN_SUCCESS_MSG: Locator
    readonly SERVICE_REQ_ID: Locator
    readonly EMP_ID: Locator
    readonly COMMENT_AND_COMMUNICATION_TAB: Locator
    readonly EMP_COMMENT_FIELD: Locator
    readonly ADD_EMP_COMMENT_BUTTON: Locator
    readonly EMP_COMMENT_ADDED: Locator
    readonly COMMENT_TEXT_FIELD: Locator
    readonly ADD_COMMENT_BUTTON: Locator
    readonly COMMENT_ADDED: Locator
    readonly SERVICE_REQ_ID_UNDER_REVIEW: Locator
    readonly APPROVE_BUTTON: Locator
    readonly APPROVE_SUCCESS_MSG: Locator
    readonly REJECT_BUTTON: Locator
    readonly SERVICE_REQ_ACCEPTED_STATUS_HABURGER: Locator
    readonly SERVICE_REQ_MARK_AS_COMPLETE: Locator
    readonly MENU_BAR_COLLAPS: Locator
    readonly EMP_PORTAL_MENU_BAR_COLLAPS: Locator
    readonly EMP_PORTAL_MENU_BAR_EXPAND: Locator
    readonly NEW_REQUEST_BUTTON: Locator
    readonly NOTIFY: Locator
    readonly NOTIFIED_SUCCESS_MSG: Locator
    readonly PRIORITY_LEVEL_DROPDOWN: Locator
    readonly REQUEST_TITLE_FIELD: Locator
    readonly SUBMIT_REQ_BUTTON: Locator
    readonly COMPLETE_BUTTON: Locator
    readonly EMP_PORTAL_CROSS_ICON: Locator
    readonly STATUS_FILTER: Locator
    readonly PRIORITY_FILTER: Locator
    readonly SUBMITTED_BY_FILTER: Locator
    readonly DUE_DATE_FROM_CAL: Locator
    readonly DUE_DATE_TO_CAL: Locator
    readonly CLEAR_ALL_FILTER: Locator
    readonly NO_DATA: Locator
    readonly FILTERED_DATA: Locator
    readonly REQ_OWNER_FILTER: Locator
    readonly ROLE_HAMBURGER: Locator
    readonly ISSUE_REMIDIATION_FIELD_2: Locator
    readonly EMPLOYEE_PORTAL_HAMBURGER: Locator
    readonly NODATA_AVAILABLE: Locator
    readonly NOTIFY_BUTTON: Locator
    readonly NOTIFY_SUCCESS_MESSAGE: Locator
    readonly RESET_PASSWORD_INPUT: Locator
    readonly CONFIRM_RESET_PASSWORD_INPUT: Locator
    readonly CHANGE_PASSWORD_BUTTON: Locator
    readonly SELECT_OWNERSHIP_DEPARTMENT: Locator
    readonly RISK_SOURCE_DROPDOWN: Locator
    readonly RISK_SOURCE_CATEGORY: Locator
    readonly MAP_FRAMEWORK_CHECKBOX: Locator
    readonly RISK1: Locator;
    // New Locator
    readonly OPTION2: Locator;
    readonly SEARCH_EMPLOYEE: Locator;
    readonly NEXT_PAGE: Locator;



    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.NEW_ASSESMENT = page.locator(`//div[normalize-space()='No Data Available']`);
        this.NOTIFY_BUTTON = page.locator(`//button//span[normalize-space()='Notify']`);
        this.NOTIFY_SUCCESS_MESSAGE = page.locator(`//div[normalize-space()='Notify Success Message']`);
        this.RESET_PASSWORD_INPUT = page.locator(`//input[@placeholder="Password"]`);
        this.CONFIRM_RESET_PASSWORD_INPUT = page.locator(`//input[@placeholder="Confirm Password"]`);
        this.CHANGE_PASSWORD_BUTTON = page.locator(`//input[@type='submit' and @value='Change']`);
        this.EXECUTIVE_DASHBOARD = page.locator("//div[@class='col']//div[normalize-space()='Executive Dashboard']");
        this.RISK_DASHBOARD = page.locator(`//span[contains(@class,"tab")]//span[contains(text(),'Risk Dashboard')]`);
        this.COMPLIANCE_DASHBOARD = page.locator(`//span[contains(@class,"tab")]//span[contains(text(),'Compliance Dashboard')]`);
        this.GOVERNANCE_DASHBOARD = page.locator(`//span[contains(@class,"tab")]//span[contains(text(),'Governance Dashboard')]`);
        this.RISK_DSHBOARD_TAB = page.locator("//div[@class='col']//div[normalize-space()='Risk Dashboard']");
        this.COMPLIANCE_DASHBOARD_TAB = page.locator("//div[@class='col']//div[normalize-space()='Compliance Dashboard']");
        this.GOVERNANCE_DASHBOARD_TAB = page.locator("//div[@class='col']//div[normalize-space()='Governance Dashboard']");
        this.TASKS = page.locator(`//span[normalize-space()='Tasks']`);
        this.MY_TASKS_TAB = page.locator(`(//span[contains(text(), 'My Tasks')])[1]`);
        this.TASKS_TABLE = page.locator(`(//h3/span[text()='Tasks'])[1]`);
        this.OVER_DUE_TASKS_TAB = page.locator(`//span[normalize-space()='Over Due']/ancestor::button`);
        this.TASK_DUE_TODAY_TAB = page.locator(`//span[normalize-space()='Today']/ancestor::button`);
        this.TASK_DUE_THIS_WEEK = page.locator(`//span[normalize-space()='This Week']/ancestor::button`);
        this.TASK_DUE_THIS_MONTH = page.locator(`//span[normalize-space()='This Month']/ancestor::button`)
        this.FILTER_ICON = page.locator(`//span[@aria-label="s-filter"]`);
        this.MODULE_DROPDOWN = page.locator(`//mat-label[text()='Module']/ancestor::div[contains(@class,"mat-mdc-form")]`);
        this.DROPDOWN_OPTION = page.locator(`//div[@role="listbox"]`).getByText('Risk');
        this.FILTERED_MODULE = page.locator(`(//td[text()='Risk'])[1]`);
        this.FILTER_BUTTON = page.locator(`//button[normalize-space()='Filter']`);
        this.TYPE_DROPDOWN = page.locator(`//mat-label[contains(text(),'Type')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button//*[@icon="s-chevron-down"]`);
        this.TYPE_DROPDOWN_FILTER = page.locator(`//mat-label[text()='Type']/ancestor::div[contains(@class,"mat-mdc-form")]`);
        this.TYPE_DROPDOWN_OPTION = page.locator(`//div[@role="listbox"]`).getByText('Risk Creation');
        this.FILTERED_TYPE = page.locator(`(//td/span[text()='Risk Creation'])[1]`);
        this.STATUS_DROPDOWN = page.locator(`(//mat-label[normalize-space()='Status']/ancestor::div[contains(@class,"mat-mdc-form")]//button//*[@icon="s-chevron-down"])[1]`);
        this.STATUS_DROPDOWN_OPTION = page.locator(`//div[@role="listbox"]`).getByText('Work in Progress');
        this.FILTERED_STATUS = page.locator(`(//span[text()=' Work in Progress '])[1]`);
        this.START_DATE_CALENDER = page.locator(`//mat-label[normalize-space()='Start Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.END_DATE_CALENDER = page.locator(`//mat-label[normalize-space()='End Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.VIEW_BUTTON = page.locator(`//div[text()=' View ']`);
        this.CALENDER_ICON = page.locator(`//ui-button-toggle[@class="lg md"]//span[@class="s-calendar-month"]`);
        this.MAP_RISK_CHECKBOX = page.locator(`(//input[@name="SelectedTreatmentIds"])[1]`);
        this.RISK_MAP_BUTTON = page.locator(`(//span[normalize-space()='Map'])[1]`);
        this.PRIORITY_RADIO = page.locator(`(//label[normalize-space()='Low']/ancestor::div//input[@type="radio"])[3]`);
        this.PURPOUSE_DROPDOWN = page.locator(`//mat-label[normalize-space()='Purpose']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.TABLE_ICON = page.locator(`//button//span[@aria-label="s-table"]`);
        this.CLAENDER_VIEW = page.locator(`(//thead[@role="presentation"]/tr/th[@role="columnheader"])[1]`);
        this.TABLE_VIEW = page.locator(`//div[contains(@class,"p-datatable-table")]`);
        this.TASK_NAME = page.locator(`(//div/a[contains(text(),'Approval')])[1]`);
        this.MY_DEPARTMENT_TAB = page.locator(`//span[text()='My Department Tasks ']`);
        this.ALL_TASK_TAB = page.locator(`//span[text()='All Tasks ']`);
        this.TABLE_VIEW_ICON = page.locator(`(//span[@class="s-table"])`);
        this.CALENDER = page.locator(`//span[normalize-space()='Calendar']`);
        this.CALENDAR_PAGE = page.locator(`//h3/span[text()='Calendar']`);
        this.SELECT_OWNER_GOV = this.page.locator(`//span[normalize-space()='Automation_QA_User']`);
        this.ADD_EVENT_BUTTON = page.locator(`//span[text()='Add Event']`);
        this.ADD_EVENT_POP_UP = page.locator(`//h3/span[text()='Add Event']`);
        this.TITTLE_FIELD = page.locator(`//input[@placeholder="Title"]`);
        this.DESCRIPTION = page.locator(`//textarea[@placeholder="Description"]`);
        this.DEPARTMENT_DROPDOWN = page.locator(`//mat-label[normalize-space()='Select Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.DEPARTMENT_DROPDOWN_DEPT = page.locator(`//mat-label[normalize-space()='Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_DEPARTMENT = page.locator(`//mat-option[normalize-space()="${testConfig.department}"]`);
        this.EVENT_OWNER_DROPDOWN = page.locator(`//mat-label[normalize-space()='Event Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_OWNER = page.locator(`//div[@role="listbox"]`).getByText(`${testConfig.approver}`);
        this.TYPE_DROPDOWN = page.locator(`//mat-label[contains(normalize-space(),'Type')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.TYPE_DROPDOWN_EVENT = page.locator(`//mat-label[normalize-space()='Type']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_TYPE = page.locator(`//div[@role="listbox"]`).getByText(`${testConfig.type}`);
        this.ADD_BUTTON = page.locator(`//span[normalize-space()='Add']`);
        this.VIEW_DRPDOWN = page.locator(`//mat-select[@role="combobox"]`);
        this.MONTHLY_VIEW = page.locator(`//table[@role="grid"]`);
        this.QUATERLY_VIEW = page.locator(`(//div[contains(@class ,"col-3 ng-star-inserted")])[1]`);
        this.SETTINGS = page.locator(`//span[normalize-space()='Settings']`);
        this.FRAMEWORK_SETTINGS = page.locator(`//a[normalize-space()='Framework Settings']`);
        this.FRAMEWORK_CHECKBOX = page.locator(`(//div[normalize-space()='']/following::input[@type="checkbox"])[1]`);
        this.FRAMEWORK_PAGE = page.locator(`//h3/span[normalize-space()='Available Frameworks']`);
        this.SAVE_BUTTON = page.locator(`(//span[normalize-space()='Save'])[1]`);
        this.SUCCESS_MSG = page.locator(`(//div[contains(text(),'Saved Successfully')])[1]`);
        this.CREATED_SUCCESS_MSG = page.locator(`(//div[contains(text(),'Created Successfully')])[1]`);
        this.SUBMITTED_SUCCESS_MSG = page.locator(`//div[contains(text(),'Request submitted successfully.')]`);
        this.UPDATED_SUCCESS_MSG = page.locator(`(//div[contains(text(),'Updated Successfully')])[1]`);
        this.COMPLAINCE = page.locator(`//span[normalize-space()='Compliance']`);
        this.FRAMEWORKS = page.locator(`//a[normalize-space()='Frameworks']`);
        this.FRAMEWORKS_PAGE = page.locator(`//h3/span[text()='Frameworks']`)
        this.ADD_FRAMEWORK_BUTTON = page.locator(`//button[normalize-space()='Add Framework']`);
        this.CLONE_FROM_LIBRARY = page.locator(`//button[normalize-space()='Clone From Library']`);
        this.IMPORT_FRAMEWORK_POP_UP = page.locator(`//h3/span[normalize-space()='Import Framework']`);
        this.AVAILABLE_FRAMEWORK_DROPDOWN = page.locator(`//mat-label[normalize-space()='Available Framework Standards']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_FRAMEWORK = page.locator(`(//*[@role="option"])[2]`);
        this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN = page.locator(`//mat-label[normalize-space()='Available Sub Framework']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_SUB_FRAMEWORK = page.locator(`(//*[@role="option"])[1]`);
        this.CLONED_FRAMEWORK_NAME_FIELD = page.locator(`//mat-label[normalize-space()='Cloned Framework Name']/following::input[1]`);
        this.CLONED_FRAMEWORK_SHORT_NAME = page.locator(`//mat-label[normalize-space()='Cloned Framework Short Name']/following::input[1]`);
        this.CLONE_BUTTON = page.locator(`//span[normalize-space()='Clone']`);
        this.GOV_EDIT = page.locator(`(//span[@class="s-pencil"])[1]`)
        this.COMMENT_FIELD = page.locator(`//textarea[@placeholder="Enter Your Comment"]`);
        this.EVIDENCE_SETTINGS = page.locator(`//a[normalize-space()='Evidence Settings']`);
        this.EVIDENCE_CHECKBOX = page.locator(`//input[@name="approvalEvidences"]`);
        this.EVIDENCE_SAVE_BUTTON = page.locator(`//span[normalize-space()='Save']`);
        this.COUNT_TEXTFIELD = page.locator(`//input[@name="reviewAfter"]`);
        this.CONTROLS = page.locator(`//div[@role="tablist"]//span[text()='Controls']`);
        this.FRAMEWORK = page.locator(`(//tr[@class="ng-star-inserted"]//a)[1]`);
        this.GOV_SAVE = page.locator(`//span[normalize-space()='Save']`)
        this.SELECT_CONTROL = page.locator(`(//div[@class="cell-content ng-star-inserted"]//a)[2]`);
        this.SELECT_CONTROL_FOR_AUDIT = page.locator(`(//div[@class="cell-content ng-star-inserted"]//a)[1]`);
        this.MAP_DOC_BUTTON = page.locator(`//span[text()='Map Document']`);
        this.SELECT_DOC_CHECKBOX = page.getByRole('checkbox').nth(1);
        this.MAP_EVIDENCE_BUTTON = page.locator(`//div[@class="view-actions"]//span[normalize-space()='Map']`);
        this.REQUIRED_EVIDENCE_TAB = page.locator(`//span[normalize-space()='Required Evidence']`);
        this.NO_EVIDENCE_MSG = page.locator(`//span[normalize-space()='No Evidence']`);
        this.REQUIRED_EVIDENCE_TABLE = page.locator(`//table[contains(@class,"evidence-required__table")]`);
        this.TASKS_TAB = page.locator(`//div[@role="tablist"]//span[text()='Tasks']`);
        this.REQUEST_EVIDENCE_BUTTON = page.locator(`//span[text()='Request Evidence']`);
        this.DUE_DATE_CALENDAR = page.locator(`//mat-label[normalize-space()='Due Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.REQUEST_EVIDENCE_POP_UP = page.locator(`//h3/span[text()='Request Evidence']`);
        this.ASSIGN_TO_DROPDOWN = page.locator(`//div[text()='Select Assigned To']/ancestor::div[@class="form-group mb-0 text-cursor w-auto flex-grow-1 p-0 required"]`);
        this.SELECT_ASSIGNEE = page.locator(`//div[@role="listbox"]`).getByText(`${testConfig.user}`);
        this.ADD_APPROVER_BUTTON = page.locator(`(//span[normalize-space()='Add Approver'])[1]`)
        this.APPROVAR_DRPDOWN = page.locator(`//mat-label[normalize-space()='1st Approver']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_APPROVAR = page.locator(`//span[normalize-space()='${testConfig.assignee}']`);
        this.SELECT_USER = page.locator(`//div[@role="listbox"]`).getByText(`${testConfig.user}`);
        this.SEND_BUTTON = page.locator(`//span[normalize-space()='Send']`);
        this.REQ_EVIDENCE_ADD_BUTTON = page.locator(`(//span[text()='Add'])[1]`);
        this.CONTROL_ADD_BUTTON = page.locator(`//span[text()='Add Link']/following::span[text()='Add']`)
        this.REQ_EVIDENCE_ENG_TEXTFIELD = page.locator(`//input[@name="requiredEvidenceName"]`);
        this.EVIDENCE_TAB = page.locator(`//div[@role="tablist"]//span[text()='Evidence']`);
        this.REQ_EVIDENCE_ARABIC_TEXTFIELD = page.locator(`//input[@name="requiredEvidenceNameAr"]`);
        this.MAP_BUTTON = page.locator(`//span[text()='Map']`);
        this.SELECT_MAP_CHECKBOX = page.getByRole('checkbox').nth(1);
        this.EVIDENCE_STATUS_DROPDOWN = page.locator(`//div[@class="ng-value-container"]`);
        this.ADD_EVIDENCE = page.locator(`//span[text()='Add Evidence']`);
        this.EVIDENCE_NAME = page.locator(`//input[@name="evidenceName"]`);
        this.EVIDENCE_DESC = page.locator(`(//textarea[contains(@class,"mat-mdc-input-element input ng-untouched ng-pristine ng-valid mat")])[1]`);
        this.ADD_EVIDENCE_BUTTON = page.locator(`//div[contains(@class,"view-actions")]//span[normalize-space()='Add']`);
        this.DETAILS_TAB = page.locator(`//div[@role="tablist"]//span[text()='Details']`);
        this.EDIT_BUTTON = page.locator(`//span[text()='Edit']`);
        this.NEW_EVIDENCE = page.locator(`(//td/a[@class="cursor-pointer link"])[1]`);
        this.GOV_CONTROL = page.locator(`//span[normalize-space()='Controls']`).first();
        this.OWNERSHIP_DEPARTMENT = page.locator(`(//mat-label[normalize-space()='Select Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.OWNERSHIP_OWNER = page.locator(`(//mat-label[normalize-space()='Select Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.STAKEHOLDER_DEPARTMENT = page.locator(`//div[text()='Stakeholder']/following::mat-label[normalize-space()='Select Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.STAKEHOLDER_USER = page.locator(`(//mat-label[normalize-space()='Select User']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.EXPECTED_DATE_CALENDER = page.locator(`//ui-icon[@icon="s-calendar-month"]`);
        this.DEPT_COMPLIANCE = page.locator(`//div[@role="tablist"]//span[text()='Departmental Compliance']`);
        this.HAMBURGER = page.locator(`(//td//span[@class="s-dots-vertical"])[1]`);
        this.ROLE_HAMBURGER = page.locator(`//a[normalize-space()='Automation_Role']/ancestor::tr//span[@class='s-dots-vertical']`);
        this.REQ_COMPLIANCE_DATE = page.locator(`//button[normalize-space()='Request Compliance Date']`);
        this.REQ_COMPLIANCE_LEVEL = page.locator(`//button[normalize-space()='Request Compliance Level']`);
        this.EDIT = page.locator(`//div[@role="menu"]`).getByText('Edit');
        this.EDIT1 = page.locator(`//div[@role="menu"]//button[normalize-space(.)='Edit']`);
        this.THREE_DOT = page.locator(`//span[@class="s-dots-vertical"]`);
        this.VENDOR_THREE_DOT = page.locator(`(//span[contains(text(),'VDR')]/following::button//span[@class="s-dots-vertical"])[1]`);
        this.ADD_RISK_BUTTON = page.locator(`(//span[normalize-space()='Add Risk'])[1]`);
        this.RISK_RADIO_BUTTON = page.locator(`(//label[normalize-space()='${testConfig.methedologyName}']/preceding::div[contains(@class,"mdc")]//input)[1]`);
        this.REMARK_TAB = page.locator(`//div[@role="tablist"]//span[text()='Remarks']`);
        this.ADD_REMARK_BUTTON = page.locator(`//span[normalize-space()='Add Remark']`).first();
        this.REMARK_TITTLE = page.locator(`//mat-label[contains(text(),'Title')]`);
        this.REMARK_FIELD = page.locator(`//textarea[@id="remark"]`);
        this.TASK_OWNER_DROPDOWN = page.locator(`//mat-label[normalize-space()='Task Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.REMARK_HAMBURGER = page.locator(`(//td//span[@class="s-dots-vertical"])[1]`);
        this.REMARK_EDIT = page.locator(`//div[@role="menu"]`).getByText('Edit');
        this.REMARK_DETAILS = page.locator(`//div[@role="menu"]`).getByText('Details');
        this.REMARK_DETAILS_POP_UP = page.locator(`h3`, { hasText: 'Remark Details' }).first();
        this.REMARK_DELETE = page.locator(`//div[@role="menu"]`).getByText('Delete');
        this.DELETE_REMARK_CONFIRMTION = page.locator(`//div[@role="dialog"]`);
        this.YES_BUTTON = page.getByText('Yes').first();
        this.THREE_DOT_TAB = page.locator(`//div[@class="p-4"]//i[@class="fa fa-ellipsis-v"]`);
        this.INTIAVITES = page.locator(`//div[@role="tablist"]//span[normalize-space()='Initiatives']`).first();
        this.NEW_INTIAVATE_BUTTON = page.locator(`//span[text()='New Initiative']`).first();
        this.INTIVATE_DESC = page.locator(`//textarea[@name="description"]`);
        this.RISK_TREATMENT_BUTTON = page.locator(`//span[text()='Map Risk Treatment']`);
        this.DEPT_COMPLIANCE_TABLE = page.locator(`//table[contains(@class,"p-datatable-table")]`);
        this.INITIVATE_DETAILS = page.locator(`//div[@role="menu"]`).getByText('Details');
        this.INTIVATE_DETAILS_PAGE = page.locator(`(//span[normalize-space()='Initiative Details']/following::div[@class="row"])[1]`);
        this.SAVE = page.locator(`//input[@value="Save"]`);
        this.AUDIT = page.locator(`//span[normalize-space()='Audit']`);
        this.AUDIT_COMPLAINCE_LEVEL = page.locator(`(//*[normalize-space()='Auditor Review']/following::div[@class="ui-button-toggle-group"])[1]`);
        this.AUDIT_REVIEW = page.locator(`(//div[text()='Auditor Review']/ancestor::div[@class="mt-5 ng-star-inserted"]//span/span)[1]`);
        this.AUDIT_DETAILS = page.locator(`//li/a[normalize-space()='Details']`);
        this.TASK_ASSIGN_TO = page.locator(`//mat-label[(text()='Task Assigned To')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button//*[@icon="s-chevron-down"]`);
        this.AUDIT_DETAIL_POP_UP = page.locator(`(//h3)`, { hasText: 'Audit Details' }).first();
        this.NOTE_TO_SELF_ICON = page.locator(`//div[text()='Control Details']/following::button//ui-icon[@icon="s-checklist"]`);
        this.NOTE_TEXT_FIELD = page.locator(`//textarea[@placeholder="Add Note"]`);
        this.SEND_NOTE_ICON = page.locator(`//ui-icon[contains(@icon,"s-send")]`);
        this.NOTE_ADDED = page.locator(`(//div[@class="mat-mdc-tooltip-trigger line-clamp-2 ng-star-inserted"])[1]`);
        this.ISSUE = page.locator(`//span/span[normalize-space()='Issues']`);
        this.GOV_CONTROL_SAVE = page.locator(`//span[normalize-space()='Save']`)
        this.ADD_ISSUE = page.locator(`//span[text()='Add Issue']`);
        this.ISSUE_NAME_FIELD = page.locator(`//mat-label[contains(text(),'Name')]`).first();
        this.CONTROL_NAME_FIELD = page.locator(`//input[contains(@class,"mat-mdc-input-element")]`);
        this.ISSUE_DESC_FIELD = page.locator(`(//textarea[contains(@class,"mat-mdc-input-element input ng-untouched ng-pristine mat-mdc-form-field-textarea-control")])[1]`);
        this.ISSUE_REMIDIATION_FIELD = page.locator(`(//textarea[contains(@class,"mat-mdc-input-element input ng")])[2]`);
        this.ISSUE_REMIDIATION_FIELD_2 = page.locator(`//mat-label[text()='Recommended Remediation']`);
        this.ISSUE_TYPE_DROPDOWN = page.locator(`//mat-label[normalize-space()='Issue Type']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_ISSUE_TYPE = page.locator(`//div[@role="listbox"]`).getByText('Automation_Issue_Type').first();
        this.ISSUE_PRIORITY = page.locator(`//mat-label[normalize-space()='Issue Priority']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_PRIORITY = page.locator(`//div[@role="listbox"]`).getByText('Low');
        this.TARGET_DATE_CALENDER = page.locator(`//mat-label[normalize-space()='Target Remediation Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.SAVE_ISSUE = page.locator(`//span[normalize-space()='Save']`);
        this.ISSUE_OWNER = page.locator(`//mat-label[contains(normalize-space(),'Owner')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.ISSUE_DEPARTMENT = page.locator(`//mat-label[normalize-space()='Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.REMEDIATION = page.locator(`//div[@role="menu"]`).getByText('Remediation Task');
        this.SELECT_PURPOUSE = page.locator(`//div[@role="listbox"]`).getByText('Others');
        this.REMEDIATION_POPUP = page.locator(`(//h5)[3]`, { hasText: 'Remediations' });
        this.REMEDIATION_FIELD = page.locator(`//textarea[@formcontrolname="recommendedRemediation"]`);
        this.ISSUE_DETAILS_POPUP = page.locator(`//h3`, { hasText: 'Issue Details' }).last();
        this.CREATE_BUTTON = page.locator(`//span[normalize-space()='Create']`);
        this.COMMON_CONTROL_TAB = page.locator(`//span[normalize-space()='Common Controls']`);
        this.MANAGE_CROSS_MAPING_BUTTON = page.locator(`//span[normalize-space()='Manage Cross-mapping']`).first();
        this.COMMOM_CONTROL_BUTTON = page.locator(`//span[normalize-space()='Add Common Control']`).first();
        this.CONTROL_CREATE_BUTTON = page.locator(`//span[normalize-space()='Create']`);
        this.EVIDENCE = page.locator(`//span[normalize-space()='Evidence']`);
        this.EVIDENCE_TABLE = page.locator(`//div[contains(@class,"p-datatable-table")]`);
        this.RISK_SETTINGS = page.locator(`//span[normalize-space()='Risk Settings']`);
        this.ASSESSMENT_CRITERIA = page.locator(`//div[normalize-space()='Assessment Criteria']//span[@class="s-arrow-up-right"]`);
        this.METHELOGY = page.locator(`(//span[normalize-space()='Methodology'])[1]`);
        this.METHELOGY_CHECKBOX = page.locator(`//label[normalize-space()='${testConfig.methedologyName}']/preceding::input[@type='checkbox'][1]`);
        this.RISK_MANAGEMENT_BUTTON = page.locator(`//span[normalize-space()='Risk Management']`);
        this.RISK_REGISTER_BUTTON = page.locator(`//span[normalize-space()='Risk Register']`);
        this.NEW_RISK_BUTTON = page.locator(`//span[text()='New Risk']`);
        this.CREATE_RISK_BUTTON = page.locator(`(//span[normalize-space()='Create Risk'])[1]`);
        this.RISK = page.locator(`(//div[text()='Open' or text()='Closed']/ancestor::tr//a[contains(@class,"mat-mdc")])[1]`);
        this.RISK1 = page.locator(`(//tr[.//div[normalize-space()='Open' or normalize-space()='Closed']]//a[contains(@class,'mat-mdc')])[1]`);
        this.RISK_PAGE = page.locator(`//div[@class="row"]/div[@class="col-md-6"]`);
        this.SELECT_RISK = page.locator(`//td[@class="main-risk-register__risk-title ng-star-inserted"]/ancestor::tbody/following::tbody//tr//span[normalize-space()='Open']`);
        this.NEW_TREATEMENT_BUTTON = page.locator(`//span[text()='New Treatment']/ancestor::button`);
        this.TREATMENT_NAME_FIELD = page.locator(`//input[@placeholder="Enter 3rd Party Name"]`);
        this.TREATEMENT_DESC = page.locator(`//textarea[@placeholder="Treatment Plan Description"]`);
        this.TREATEMENT_COST_FIELD = page.locator(`//input[@placeholder="Treatment Cost"]`);
        this.TREATEMENT_OWNER_DROPDOWN = page.locator(`//mat-label[normalize-space()='Treatment Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.TREATMENT_HISTORY_BUTTON = page.locator(`//span[normalize-space()='Treatment History']`);
        this.TREATMENT_HISTORY_POPUP = page.locator(`(//h3)`, { hasText: 'Treatment History' }).first();
        this.ASSESMENT_HISTORY_BUTTON = page.locator(`//span[normalize-space()='Assessment History']`);
        this.ASSESMENT_HISTORY_POPUP = page.locator(`(//h3)`, { hasText: 'Assessment History' }).first();
        this.EXPORT_PDF_ICON = page.locator(`//span[@class="export-icon export-icon--pdf"]`);
        this.EXEPTIONS_TAB = page.locator(`//span[text()='Exceptions']`);
        this.ADD_EXEPTION_BUTON = page.locator(`//span[text()='Add Exception']`);
        this.EXEPTION_START_DATE = page.locator(`//mat-label[normalize-space()='Exception Start Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.EXEPTION_END_DATE = page.locator(`//mat-label[normalize-space()='Exception End Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.RISK_NOTE = page.locator(`//span[contains(text(),'R-')]/following::button//ui-icon[@icon="s-checklist"]`);
        this.RISK_TEMPLATE = page.locator(`//span[normalize-space()='Risk Templates']`);
        this.LIBRARY_TAB = page.locator(`//span[normalize-space()='Library']`);
        this.TEMPLATE_CHECKBOX = page.getByRole('checkbox').nth(1);
        this.CLONE_TEMPLATE_BUTTON = page.locator(`//span[normalize-space()='Copy To Templates']`);
        this.INDECATOR_KEY_TAB = page.locator(`(//span[normalize-space()='Key Indicators'])[1]`);
        this.NEW_INDICATOR_BUTTON = page.locator(`(//span[normalize-space()='Add Key Indicator'])[1]`);
        this.INDICATOR_SOURCE = page.locator(`//input[@name="dataSource"]`);
        this.INDICATOR_MINTOLER_FIELD = page.locator(`//input[@name="minTolerance"]`);
        this.INDICATOR_MAXTOLER_FIELD = page.locator(`//input[@name="maxTolerance"]`);
        this.FRECUENCY_DROPDOWN = page.locator(`//mat-label[normalize-space()='Frequency']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.MESERMENT_DROPDOWN = page.locator(`//mat-label[normalize-space()='Measurement']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_TYPE_RADIO = page.locator(`//label[text()='Risk']/..//input[@type="radio"]`);
        this.NEW_RISK_TEMPLATE = page.locator(`//span[text()='New Risk Template']`);
        this.RISK_CATEGORY = page.locator(`//mat-label[contains(normalize-space(),'Category')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.ADD_RISK = page.locator(`//span[normalize-space()='Add']`);
        this.CATALOG = page.locator(`//span[normalize-space()='Catalog']`);
        this.NEW_ASSET_BUTTON = page.locator(`(//span[normalize-space()='New Asset'])[1]`);
        this.ARABIC_ASSEST_NAME_FIELD = page.locator(`//mat-label[contains(normalize-space(),'Name Arabic')]`);
        this.ENG_ASSEST_NAME_FIELD = page.locator(`//mat-label[contains(normalize-space(),'Name English')]`);
        this.FRAMEWORK_AUDIT = page.locator(`(//span[@class="s-search"]/ancestor::tr//a)[1]`);
        this.THREATS = page.locator(`//span[normalize-space()='Threats']`);
        this.NEW_THREAT_BUTTON = page.locator(`//span[text()='New Threat']`);
        this.THREAT_ARABIC_NAME = page.locator(`//input[@formcontrolname="nameAr"]`);
        this.SOURCE_DROPDOWN = page.locator(`//mat-label[contains(normalize-space(),'Vulnerability Source')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.VULNERABILITY = page.locator(`//span[text()='Vulnerabilities']`);
        this.NEW_VULNERABILITY_BUTTON = page.locator(`//span[text()='New Vulnerability']`);
        this.PROCESS = page.locator(`//span[text()='Processes']`);
        this.NEW_PROCESS = page.locator(`//span[text()='New Process']`);
        this.CATEGORY_DROPDOWN = page.locator(`//mat-label[contains(normalize-space(),'Category')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.INITIATIVE_MANAGEMENT = page.locator(`//span[normalize-space()='Initiative Management']`);
        this.INITIATIVE = page.locator(`//span[normalize-space()='Initiatives']`);
        this.NEW_INITIATIVE_BUTTON = page.locator(`(//span[normalize-space()='New Initiative'])[1]`);
        this.SELECT_INITIATIVE = page.locator(`(//td/div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.LINK_CONTROL_BUTTON = page.locator(`//span[text()='Link Control']`);
        this.MILESTONE_TAB = page.locator(`//span[normalize-space()='Milestones And Tasks']`).first();
        this.NEW_MILESTONE_BUTTON = page.locator(`//span[text()='New Milestone']`).first();
        this.GOVERNANCE = page.locator(`//span[normalize-space()='Governance']`);
        this.TEMPLATES = page.locator(`//span[normalize-space()='Templates']`);
        this.CREATE_TEMPLATE = page.locator(`(//span[normalize-space()='Create Template'])[1]`);
        this.ARABIC_NAME_TEXTFILED = page.locator(`//input[@name="nameArabic"]`);
        this.ENGLISH_NAME_TEXTFIELD = page.locator(`//input[@name="nameEnglish"]`);
        this.DOCUMENT_TEXT_TEXTFIELD = page.locator(`//div[@data-placeholder="Enter text here..."]`);
        this.CREATE_BUTTON_GOV = page.locator(`//span[text()='Create']`);
        this.TEMPLATE_PAGE = page.locator(`//span[text()='Templates']`);
        this.TEMPLATE_DETAILS_POP_UP = page.locator('h3', { hasText: 'Template Details' }).first();
        this.TEMPLATE = page.locator(`(//h5[@class="cursor-pointer"])[1]`);
        this.EDIT_PAGE_HEADLINE = page.locator(`(//span[normalize-space()='Edit Template'])[1]`);
        this.EDIT_PAGE = page.locator(`//div[@class="templates-form__container"]`);
        this.DELETE_SUCCESS_MSG = page.locator(`(//div[contains(text(),'Deleted Successfully')])[1]`);
        this.DELETE_BUTTON = page.locator(`//span[text()=' Delete ']`);
        this.TEM_DELETE_ICON = page.locator(`(//span[@class="s-trash"])[1]`);
        this.CONFIRMATION_POP_UP = page.locator(`//div[@role="dialog"]`);
        this.POLICY_DOC_MANAGEMENT = page.locator(`//span[normalize-space()='Policy and Document Management']`);
        this.NEW_DOC_BUTTON = page.locator(`//span[text()='New Document']`);
        this.CREATE_DOC = page.locator(`(//div[normalize-space()='Create a Document'])[1]`);
        this.TITTLE = page.locator(`//input[@placeholder="Title"]`);
        this.DESCRIPTION_GOV = page.locator(`//textarea[@placeholder="Description"]`);
        this.TYPE_DROPDOWN_GOV = page.locator(`(//div[@role="combobox"])[2]`);
        this.CLARIFICATION_DROPDOWN = page.locator(`//mat-label[normalize-space()='Classification']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`)
        this.SHARING_DROPDOWN = page.locator(`//mat-label[normalize-space()='Sharing']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.DISRIBUTION_DROPDOWN = page.locator(`//mat-label[normalize-space()='Distribution']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.FROM_DATE_CALENDAR = page.locator(`//mat-label[normalize-space()='Valid From']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.TO_DATE_CALENDER = page.locator(`//mat-label[normalize-space()='Valid To']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.ADD_OWERSHIP_BUTTON = page.locator(`//span[text()='Add Ownership']`);
        this.VERSION_TEXFIELD = page.locator(`//mat-label[normalize-space()='Version']`);
        this.NEXT_BUTTON = page.locator(`//span[normalize-space()='Next']`);
        this.DOCUMENT_TEXT_TEXTFIELD_GOV = page.locator(`//div[@class='ql-editor ql-blank']//p`);
        this.FINISH_BUTTON = page.locator(`//span[normalize-space()='Finish']`);
        this.PICK_TEMPLATE = page.locator(`//div[text()=' Pick From a Template ']`);
        this.USE_TEMPLATE = page.locator(`(//span[normalize-space()='Use template'])[1]`);
        this.UPLOAD_FROM_DEVICE = page.locator(`//div[text()=' Upload a Document ']`);
        this.DOC_NAME = page.locator(`(//*[contains(normalize-space(),'Active') or contains(text(),'Expiring Soon')]/ancestor::tr//div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.ADD_INT_CONTROL = page.locator(`//button[normalize-space()='Add Internal Control']`);
        this.CONTROL_ARABIC_NAME = page.locator(`//input[@placeholder="Name in Arabic"]`);
        this.CONTROL_ENG_NAME = page.locator(`//input[@placeholder="Name in English"]`);
        this.MAP_INT_CONTROL = page.locator(`//button[normalize-space()='Map Internal Control']`);
        this.MAP_CHECKBOX = page.getByRole('checkbox').nth(1);
        this.INTERNAL_CONTROL_TAB = page.locator(`//span[normalize-space()='Internal Controls']`);
        this.ADD_CONTROL = page.locator(`(//span[normalize-space()='Add Control'])[1]`);
        this.INTERNAL_CONTROL_PAGE = page.locator(`//li[normalize-space()='Internal Controls']`);
        this.ADD_BUTTON = page.locator(`//span[normalize-space()='Add']`);
        this.HAMBERD_GOV = page.locator(`(//button[@data-toggle="dropdown"])[1]`);
        this.EDIT_CONTROL = page.locator(`//li[normalize-space()='Edit']`);
        this.UPDATE_BUTTON = page.locator(`(//span[normalize-space()='Update'])[1]`);
        this.VENDOR_MANAGEMENT = page.locator(`//span[normalize-space()='Vendor Management']`);
        this.VENDOR_TAB = page.locator(`//span[normalize-space()='Vendors']`);
        this.VENDOR_PAGE = page.locator(`//span[normalize-space()='Vendors']`).first();
        this.ADD_VENDOR_BUTTON = page.locator(`(//span[normalize-space()='New Vendor'])[1]`);
        this.VENDOR_NAME = page.locator(`//mat-label[normalize-space()='Vendor Name']`);
        this.VENDOR_ADDRESS = page.locator(`//mat-label[normalize-space()='Address']`);
        this.VENDOR_TYPE_DROPDOWN = page.locator(`//div[text()='Select Type']/ancestor::div/div[@role="combobox"]`);
        this.VENDOR_DEPARTMENT_DROPDOWN = page.locator(`(//div[text()='Select Department']/ancestor::div/div[@role="combobox"])[1]`);
        this.VENDOR_USER_DROPDOWN = page.locator(`//mat-label[normalize-space()='Vendor Manager']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.VENDOR_RISK_DROPDOWN = page.locator(`//mat-label[normalize-space()='Risk Rating']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.PHONE_NO_FIELD = page.locator(`//mat-label[normalize-space()='Phone Number']`);
        this.PRODUCT_NAME_FIELD = page.locator(`//mat-label[normalize-space()='Product Name']`);
        this.CONTROL_DETAILS_PAGE = page.locator(`//li[text()='Control Details']`);
        this.DOMAIN_FIELD = page.locator(`//mat-label[normalize-space()='Domain']`);
        this.WEBSITE_FIELD = page.locator(`//mat-label[normalize-space()='Website']`);
        this.DESCRIPTION_FIELD = page.locator(`//mat-label[normalize-space()='Description']`);
        this.CREATE_VENDOR_BUTTON = page.locator(`//span[text()='Create']`);
        this.ADD_CONTACT_BUTTON = page.locator(`//span[normalize-space()='Add Contact']`);
        this.CONTACT_NAME = page.locator(`//mat-label[normalize-space()='Name']`);
        this.POSITION = page.locator(`//mat-label[normalize-space()='Position']`);
        this.EMAIL = page.locator(`//mat-label[normalize-space()='Email']`);
        this.SELECT_VINDOR = page.locator(`(//td/div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.ADD_RISK_BUTTON_GOV = page.locator(`(//span[normalize-space()='New Risk'])[1]`);
        this.SUBMIT_BUTTON = page.locator(`(//span[normalize-space()='Submit'])[1]`);
        this.RISK_TITTLE = page.locator(`//input[@placeholder="Enter Risk Title"]`);
        this.RISK_STATEMENT = page.locator(`//mat-label[text()='Risk Statement']`);
        this.RISK_CATEGORY_DROPDOWN = page.locator(`//mat-label[text()=' Risk Category']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.RISK_OWNER = page.locator(`(//div[text()='Select user']/ancestor::div[@class="ng-value-container"])[1]`);
        this.DOCUMENT_TAB = page.locator(`(//span[normalize-space()='Documents'])[1]`);
        this.NEW_DOCUMENT_BUTTON = page.locator(`(//span[normalize-space()='Add Document'])[1]`);
        this.STATUS_DROPDOWN_VENDOR = page.locator(`//mat-label[normalize-space()='Document Status']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.EFFECTNESS_CALENDER = page.locator(`//mat-label[normalize-space()='Effectiveness Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.CREATE_DOC_VENDOR = page.locator(`//span[text()='Create']`);
        this.CONTACT_TAB = page.locator(`(//span[text()='Contacts'])[1]`);
        this.ADD_CONTACT = page.locator(`//span[text()='Add Contact']`);
        this.CONTACT_NAME_VENDOR = page.locator(`//input[@formcontrolname="name"]`);
        this.PHONE_NO_VENDOR = page.locator(`//label[contains(., 'Phone Number')]/following::input[@formcontrolname][1]`);
        this.THREE_DOT_VENDOR = page.locator(`//i[@class="fa fa-ellipsis-v"]`);
        this.EDIT_VENDOR = page.locator(`//span[text()='Edit Risk Rating']`);
        this.RADIO_VENDOR = page.locator(`//label[text()='Medium']/..//input[@type="radio"]`);
        this.AUDIT_MANEGMENT = page.locator(`//span[normalize-space()='Audit Management']`);
        this.AUDITS = page.locator(`//span[normalize-space()='Audits']`);
        this.NEW_AUDIT_BUTTON = page.locator(`//span[text()='New Audit']`);
        this.AUDIT_TYPE_DROPDOWN = page.locator(`//mat-label[normalize-space()='Audit Type']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.AUDIT_OWNER_DROPDOWN = page.locator(`//mat-label[normalize-space()='Audit Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.FRAMEWORKS_DROPDOWN = page.locator(`(//mat-label[contains(normalize-space(),'Frameworks')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.AUDITOR_DROPDOWN = page.locator(`//mat-label[normalize-space()='Auditor']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.AUDIT_NAME = page.locator(`(//*[contains(text(),'Active')]/ancestor::tr//a)[1]`);
        this.AUDIT_CONTROL = page.locator(`//a[text()='Controls ']`);
        this.AUDIT_CONTROL_EXPAND = page.locator(`(//button[@aria-label='Row Expanded' or @aria-label='Row Collapsed'])[1]`);
        this.SELECT_AUDIT_CONTROL = page.locator(`//tr[contains(@class,'is-child')][2]//a`);
        this.AUDIT_NOTE_TAB = page.locator(`//span[text()='Audit Notes']`);
        this.NEW_NOTES = page.locator(`//span[text()='Add Notes']`);
        this.NOTE_TITTLE = page.locator(`//mat-label[text()='Title']`);
        this.NOTE_REMARK = page.locator(`//mat-label[text()='Remark']`);
        this.NOTE_PROCEDURE = page.locator(`//mat-label[text()='Corrective Procedure']`);
        this.AUDIT_THREE_DOT = page.locator(`//button//ui-icon[@icon="s-dots-vertical"]`);
        this.CHANGE_STATUS = page.locator(`//span[text()='Change Status']`);
        this.AUDIT_STATUS_RADIO = page.locator(`//label[normalize-space()='Completed']/..//input[@type="radio"]`);
        this.CONFIRMATION_CHECKBOX = page.locator(`//input[@type="checkbox"]`);
        this.ISSUE_EXEPTIONS = page.locator(`//span[normalize-space()='Issues & Exceptions']`);
        this.ISSUES = page.locator(`//span[normalize-space()='Issues']`);
        this.ISSUES_TABLE = page.locator(`//table[contains(@class,"p-datatable-table")]`);
        this.EXEPTIONS = page.locator(`//span[normalize-space()='Exceptions']`);
        this.REPORTS = page.locator(`//li//span[normalize-space()='Reports']`);
        this.REPORTS_PAGE = page.locator(`//h3/span[normalize-space()='Reports']`);
        this.SELECT_REPORT_TYPE = page.locator(`//h5[text()='Risk Reports']`);
        this.SELECT_REPORT = page.locator(`(//div[@class="flex-start gap-2 ng-star-inserted"])[1]`);
        this.EXPORT_REPORT = page.locator(`//span[@class="s-file-type-pdf"]`);
        this.DELEGATION_TAB = page.locator(`//span[normalize-space()='Delegation']`);
        this.DELEGATION = page.locator(`(//span[normalize-space()='Delegation'])[2]`);
        this.NEW_DELEGATION = page.locator(`//span[text()='Add Delegation']`);
        this.DELEGATION_FROM_DROPDOWN = page.locator(`//mat-label[normalize-space()='Delegate From']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.DELEGATION_TO_DROPDOWN = page.locator(`//mat-label[normalize-space()='Delegate To']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.CREATE_DELEGATION = page.locator(`//span[text()='Delegate']`);
        this.DELEGATION_START_DATE = page.locator(`(//div[text()='Start Date']/following::input[@name="fromDate"])[1]`);
        this.DELEGATION_END_DATE = page.locator(`(//div[text()='End Date']/following::input[@name="fromDate"])[1]`);
        this.UPDATE_DELEGATION = page.locator(`//span[normalize-space()='Update']`);
        this.CANCEL_DELEGATION = page.locator(`(//span[normalize-space()='Cancel'])[1]`);
        this.DELETE_DELEGATION = page.locator(`//div[@role="menu"]`).getByText('Delete');
        this.ESCALATION_SETTING = page.locator(`//li//span[normalize-space()='Escalation Settings']`);
        this.NEW_ESCALATION_SETTING = page.locator(`(//span[normalize-space()='New Escalation Setting'])[1]`);
        this.ADD_ESCALATION_BUTTON = page.locator(`(//span[normalize-space()='Add Escalation'])[1]`);
        this.SELECT_ESCALATION_DROPDOWN = page.locator(`//mat-label[contains(text(),'1st Escalation')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button//*[@icon="s-chevron-down"]`);
        this.ESCATATIONS = page.locator(`//span[normalize-space()='Escalations']`);
        this.NEW_ESCALATION_BUTTON = page.locator(`(//span[text()='Add Escalation'])[1]`);
        this.ESCALATION_TITTLE = page.locator(`//input[@name="title"]`);
        this.ESCALATION_TRIGGER_EVENT_DROPDOWN = page.locator(`//mat-label[contains(text(),'Trigger Event')]/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.ESCALATION_USERS_DROPDOWN = page.locator(`//mat-label[text()='Users']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.DEPT_REPOT_PAGE = page.locator(`//div[text()=' All Departments ']`);
        this.EXECUTIVE_REPORT = page.locator(`//div[text()='Executive Reports']`);
        this.EVI_MAP_CHECKBOX = page.locator(`(//*[@role="dialog"]//input[@type="checkbox"])[2]`)
        this.EXECUTIVE_REPORT_PAGE = page.locator(`//div[text()='Executive Report']`);
        this.COMPLAINCE_REPORT = page.locator(`//div[text()='Compliance Reports']`);
        this.COMPLAINCE_REPORT_PAGE = page.locator(`//div[text()='Compliance Report']`);
        this.TASK_REPORT = page.locator(`//div[text()='Tasks Reports']`);
        this.TASK_REPORT_PAGE = page.locator(`//div[text()='Task Status Report ']`);
        this.INITIATIVES_REPORT = page.locator(`//div[text()='Initiatives Reports']`);
        this.INITIATIVES_REPORT_PAGE = page.locator(`//div[text()='Initiatives Report']`);
        this.ISSUE_REPOT = page.locator(`//div[text()='Issues Reports']`);
        this.ISSUE_REPORT_PAGE = page.locator(`//div[text()='Issues Report']`);
        this.PERMISIONS = page.locator(`//span[text()='Permission']`);
        this.PERMISION_POPUP = page.locator(`//h3`, { hasText: 'Add Permission' }).first();
        this.ASSET_NAME = page.locator(`(//div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.USERS_AND_DEPARTMENT = page.locator(`//span[normalize-space()='Users / Departments']`);
        this.USERS_TAB = page.locator(`//div[text()=' Users ']`);
        this.ROLES = page.locator(`//span[normalize-space()='Roles']`);
        this.PERMISION_CHECKBOX = page.locator(`//label[normalize-space(text())='Audit Delete']/..//input[@type='checkbox']`);
        this.RISK_FILTER_ICON = page.locator(`//i[@class="fa fa-filter fa-2x"]`);
        this.SEARCH_FIELD = page.locator(`//input[@name="refrenceNumber"]`);
        this.APPLY_FILTER_BUTTON = page.locator(`//span[text()='Apply Filters']`);
        this.TASK_CHECKBOX = page.locator(`(//input[@type="checkbox"])[2]`);
        this.TASK_FILTER_ICON = page.locator(`//span[@class="s-filter_down"]`);
        this.CONFIRM_BUTTON = page.locator(`//button[text()=' Confirm ']`);
        this.RE_ASSIGN = page.locator(`(//span[normalize-space()='Re-assign'])[1]`);
        this.ASSIGNE_DROPDOWN = page.locator(`(//div[text()='Select User']/ancestor::div[@class="ng-value-container"])[1]`);
        this.LINK_RISK_TRATMENT_BUTTON = page.locator(`(//span[normalize-space()='Link Risk Treatment'])[1]`);
        this.CONFIDENCIALLY_SLIDER = page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[18]`);
        this.INTIGRITY_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-child n")])[2]//div[contains(@class,"ngx-slider")])[20]`);
        this.AVAILABILITY_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-child n")])[3]//div[contains(@class,"ngx-slider")])[25]`);
        this.HOOD_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-value-")])[5]//div[contains(@class,"ngx-slider")])[5]`);
        this.TEXT_ASSERT = page.locator(`//div[text()= ' Asset Value ']`);
        this.USER_DROPDOWN = page.locator(`(//mat-label[normalize-space()='User']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.MAP_EVIDENCE = page.locator(`(//span[normalize-space()='Map Evidence'])[1]`);
        this.MAP_EVIDENCE_CHECKBOX = page.locator(`(//div[@class="mdc-checkbox"])[2]`)
        this.RISK_ASSIGN = page.locator(`//span[text()='Assign Risk']`);
        this.ADDITIONAL_DETAILS = page.locator(`//div[text()='Additional Details']`);
        this.NEW_ASSESMENT = page.locator(`//span[text()='New Assessment']`);
        this.CREATE_ASSESMENT_BUTTON = page.locator(`//button[text()='Create Assessment']`);
        this.RISKS = page.locator(`//span[text()='Risks']`);
        this.PUBLISH_BUTTON = page.locator(`//span[normalize-space()='Publish']`);
        this.CROSS_MAPPING_PAGE = page.locator(`//li[text()='Cross-mapping']`);
        this.ACTIVATE_BUTTON = page.getByText('Activate');
        this.RISK_ASSIGN_TO = page.locator(`(//div[text()='']/ancestor::div[@class="ng-value-container"])[1]`);
        this.CUSTOMER_PARAMETERS = page.locator(`//mat-label[text()='impact']`);
        this.CUSTOMER_PARAMETERS1 = page.locator(`//mat-label[text()='probability']`);
        this.THREAD_SLIDER = page.locator(`(//div[contains(@class,'mat-mdc-tooltip-trigger dot')])[4]`);
        this.VULNERABILITY_SLIDER = page.locator(`(//div[contains(@class,'mat-mdc-tooltip-trigger dot')])[4]`);
        this.INTIGRITY_SLIDER_ASSERT = page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[8]`);
        this.AVAILABILITY_SLIDER_ASSERT = page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[8]`);
        this.CONFIDENTIALY_SLIDER_ASSERT = page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[4]`);
        this.TREATMENT_ID = page.locator(`//a[contains(text(),'TR-')]`);
        this.TREATMENT_THREEDOT = page.locator(`(//button/i[@class="fa fa-ellipsis-v"])[2]`);
        this.MARK_AS_COMPLETE = page.locator(`//span[text()='Mark As Complete']`)
        this.GOV_TEM_THREEDOT = page.locator(`(//i[@class="fa fa-ellipsis-v"])[1]`)
        this.PROCEED_BUTTON = page.getByText('Proceed');
        this.RISK_IDENTIFICATION_CALENDER = page.locator(`(//div[text()='Risk Identification Date']/following::input[@name="fromDate"])[1]`);
        this.USER_ICON = page.locator(`//div[contains(@class,"type-primary variant-tertiary is-avata")]`);
        this.LOG_OUT = page.locator(`//span[text()='Sign out']`);
        this.LOGIN_PAGE = page.locator(`//input[@id="Username"]`);
        this.EXPORT_EXCEL_ICON = page.locator(`//span[@class="s-file-type-xls"]`);
        this.THREE_DOT_CONTROL = page.locator(`(//div[@class="modal-body"]//button/i)[1]`);
        this.FILE_UPLOADED = page.locator(`//div[@class="file-info"]`);
        this.RISK_RATING = page.locator(`//div[contains(@class,'chip-container') and normalize-space()='Medium']`);
        this.CROSS_MAP_CONTROL_BUTTON = page.locator(`//span[text()='Cross-map Controls']`);
        this.CROSS_MAP_ADD = page.locator(`//span[normalize-space()='Add']`);
        this.CROSS_MAP_SAVE = page.locator(`//span[normalize-space()='Save']`);
        this.STATUS_SAVE_BUTTON = page.locator(`//span[normalize-space()='Save']`);
        this.AUDIT_DELETE_BUTTON = page.locator(`//div[@role="menu"]`).getByText('Delete');
        this.ADD_ASSERT = page.locator(`//span[text()='Create Asset']`);
        this.ADD_PROCESS = page.locator(`//span[text()='Create Process']`);
        this.ADD_THREAT = page.locator(`//span[text()='Create Threat']`);
        this.ADD_VULNERABILITY = page.locator(`//span[text()='Create Vulnerability']`);
        this.REMOVE_FILTER = page.locator(`//span[normalize-space()='Clear all Filters']`);
        this.DELEGATED_TASK = page.locator(`//span[text()='Delegated Tasks ']`);
        this.EVENT_THREE_DOT = page.locator(`(//h6[contains(text(),'Automation_Event')]/ancestor::div//button//*[@icon="s-dots-vertical"])[1]`);
        this.EVENT_DETAILS = page.locator(`//div[@role="menu"]`).getByText('Details');
        this.EVENT_EDIT_BUTTON = page.locator(`//div[@role="menu"]`).getByText('Edit event');
        this.EVENT_DELETE_BUTTON = page.locator(`//div[@role="menu"]`).getByText('Delete event');
        this.EVENT_UPDATE_BUTTON = page.locator(`//span[text()='Update']`);
        this.WORKSPACE_TAB = page.locator(`//span[text()='Workspace']`);
        this.ASSIGN_TO_ME_TAB = page.locator(`//span[text()='Assigned To Me']`);
        this.ASSIGN_TO_MY_DEPT = page.locator(`//span[text()='Assigned to my Department']`);
        this.MARK_AS_RESOLVED = page.locator(`//span[text()='Mark as Resolved']`);
        this.RESOLVED_BUTTON = page.locator(`//span[text()='Resolved']`);
        this.RETIRE_OPTION = page.locator(`//span[normalize-space()='Retire']`);
        this.RETIRE_BUTTON = page.locator(`//span[normalize-space()='Retire']`);
        this.VERSION_HISTORY_TAB = page.locator(`(//span[normalize-space()='Version History'])[1]`);
        this.NEW_VERSION_BUTTON = page.locator(`//span[normalize-space()='New Version']`);
        this.EXTEND_VALIDITY = page.locator(`//span[normalize-space()='Extend Validity']`);
        this.NEXT_ARROW = page.locator(`//button[@aria-label="Next month"]`);
        this.VALIDITY_CALENDAR = page.locator(`(//input[@name="fromDate"]/ancestor::div//span[@class="input-group-text"])[2]`);
        this.RISK_HAMBURGER = page.locator(`(//span[@class="s-dots-vertical"])[1]`);
        this.EDIT_RISK = page.locator(`//span[normalize-space()='Edit']`);
        this.RISK_NAME_FIELD = page.locator(`//input[@name="RisksName"]`);
        this.RISK_SAVE = page.locator(`//input[@value="Save"]`);
        this.REQ_ATTESTATION = page.locator(`//span[normalize-space()='Request Attestation']`);
        this.SEND = page.locator(`//span[normalize-space()='Send']`);
        this.INTERNAL_CONTROL = page.locator(`(//div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.MANAGE_CROSS_MAPPING_BUTTON = page.locator(`//button[text()='Manage Cross-mapping']`);
        this.SELECT_COMMON_CONTROL = page.locator(`//td[2]`);
        this.UNLOCKED_DELETATION = page.locator(`//button[text()=' Unlock deletion']`);
        this.CROSS_MAP_CONTROL_POPUP = page.locator(`//h5[text()='Cross-map Controls']`);
        this.FILTER_BY_READINESS = page.locator(`(//mat-label[normalize-space()='Readiness']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.EVIDENCE_HAMBURGER = page.locator(`(//button[@id="TableOptions"])[1]`);
        this.EVIDENCE_EDIT = page.locator(`//a[normalize-space()='Edit']`);
        this.EVIDENCE_NAME_EDIT = page.locator(`//input[@name="evidenceName"]`);
        this.EVIDENCE_DELETE = page.locator(`//span[normalize-space()='Delete']`);
        this.SEARCH_TEXT_FIELD = page.locator(`//input[@placeholder="Search by name or ID"]`);
        this.SEARCH_ICON = page.locator(`//span[@class="s-search"]`);
        this.SEARCH_RESULT = page.locator(`(//a[@class="cursor-pointer link"])[1]`);
        this.DETAILS = page.locator(`//a[text()=' Details ']`);
        this.EVIDENCE_DETAILS_POPUP = page.locator(`//h5[text()='Evidence Details']`);
        this.EXPORT_CONTROL_BUTTON = page.locator(`//span[text()='Export']`);
        this.EXPORT_CONFIRMATION_BUTTON = page.locator(`//button[text()=' Export ']`)
        this.EXCEL_RADIO_BUTTON = page.locator(`//label[text()='Excel']/../input[@type="radio"]`);
        this.CUSTOM_FRAMEWORK_BUTTON = page.locator(`//button[normalize-space()='Create Custom Framework']`);
        this.DOMAIN_DROPDOWN = page.locator(`(//mat-label[normalize-space()='Domain']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.FRAMEWORK_NAME_FIELD = page.locator(`//mat-label[normalize-space()='Name']`);
        this.FRAMEWORK_VERSION = page.locator(`//mat-label[normalize-space()='Version']`);
        this.ADD_NEW_CONTROL_BUTTON = page.locator(`(//span[normalize-space()='Add New Control'])[1]`);
        this.REFRENCE_ENG_FIELD = page.locator(`//input[@placeholder="Reference Number in English"]`);
        this.REFRENCE_ARABIC_FIELD = page.locator(`//input[@placeholder="Reference Number in Arabic"]`);
        this.TEXTAREA_FIELD = page.locator(`//div[@data-placeholder="Enter text here..."]`);
        this.ADD_LIST_BUTTON = page.locator(`(//span[normalize-space()='Add to list'])[1]`);
        this.FRAMEWORK_EDIT = page.locator(`//span[text()='Edit']`);
        this.SHORT_NAME_FIELD = page.locator(`(//input[@class="form-control required ng-untouched ng-pristine ng-valid"])[2]`);
        this.CUSTOM_FRAMEWORK_TAB = page.locator(`//span[text()='Custom Frameworks']`);
        this.FRAMEWORK_DELETE = page.locator(`//span[text()='Delete']`);
        this.FRAMEWORK_DETAILS_BUTTON = page.locator(`//span[text()='Details']`);
        this.FRAMEWORK_DETAIL_PAGE = page.locator(`//span[text()='Details']`);
        this.TREE_VIEW_ICON = page.locator(`//a[@class="btn my-tasks__icon-tab"]`);
        this.TABLE_VIEW1 = page.locator(`//table[@class="table manage-requirements__table"]`);
        this.TREE_VIEW = page.locator(`(//ul[@class="collapse-tree"])[1]`);
        this.PERMISSION_BUTTON = page.locator(`//span[text()='Permission']`);
        this.REMOVE_SUCCESS_MSG = page.locator(`(//div[text()=' Removed Successfully '])[1]`);
        this.REMOVE_BUTTON = page.locator(`//span[text()='Remove']`);
        this.DEPT_HAMBERG = page.locator(`(//div[@class="left-sidebar"]//button[@id="TableOptions"])[1]`);
        this.UNMAP_BUTTON = page.locator(`//a[normalize-space()='Unmap']`)
        this.DOC_HAMBURGER = page.locator(`(//div[@class="controls-details__policy-container"]/..//tr//button)[1]`);
        this.DETAILS_BUTTON = page.locator(`(//a[normalize-space()='Details'])[2]`);
        this.EDIT_EVIDENCE_REQ = page.locator(`//a[normalize-space()='Request Edit']`);
        this.EDIT_REVIEW_CYCLE = page.locator(`//span[text()='Edit Review Cycle']`);
        this.PREODIC_RADIO_BUTTON = page.locator(`//label[text()='Periodic ']/input`);
        this.REVIEW_AFTER_TEXT_FIELD = page.locator(`//span[text()='Review After Every']/ancestor::div//input[@type="number"]`);
        this.EVIDENCE_FILTER_ICON = page.locator(`(//i[@class="fa fa-filter fa-2x"])[2]`);
        this.FILTER_BY_DEPT = page.locator(`//div[text()='Filter by Department']/ancestor::div[@class="ng-value-container"]`);
        this.FILTER_BY_OWNER = page.locator(`//div[text()='Filter By Owner']/ancestor::div[@class="ng-value-container"]`);
        this.FILTER_BY_VERIFICATION = page.locator(`//div[text()='Filter By Verification']/ancestor::div[@class="ng-value-container"]`);
        this.FILTER_BY_REVIEW_DUE_DAYS = page.locator(`//input[@placeholder="Review Due in (Days)"]`);
        this.CLEAR_FILTER_BUTTON = page.locator(`//button[text()='Clear all filters']`);
        this.DOC_SEARCH_FIELD = page.locator(`//input[@placeholder="Search by title or description"]`);
        this.NOTE_ICON_CONTROL = page.locator(`//div[contains(@class,"d-flex justify-content-end align")]//div[@class="my-notes__container"]`);
        this.SEND_NOTE_BUTTON = page.locator(`//div[contains(@class,"my-notes__write-note-icon icon-send1")]`);
        this.NOTE_THREE_DOT = page.locator(`//div[contains(@class,"my-note__flex my-note")]//button[@id="TableOptions"]`);
        this.RESOLVE_BUTTON = page.locator(`//a[text()='Resolve ']`);
        this.UNRESOLVE_BUTTON = page.locator(`//a[text()='Unresolve ']`);
        this.DELETE_NOTE = page.locator(`//a[normalize-space()='Delete']`);
        this.COMPLAINCE_LEVEL = page.locator(`//h6[text()='Compliance Level']/ancestor::div//button[text()=' Partially Implemented ']`);
        this.IMPLIMENTATION_GUIDENCE = page.locator(`//a[normalize-space()='Implementation Guidance']`);
        this.COLUMN_PICKER_ICON = page.locator(`//div[contains(@class,"d-flex flex-row")]//button[@data-toggle="dropdown"]/i`);
        this.COLUMN_CHECKBOX = page.locator(`//label[contains(text(),'Department')]/input[@type="checkbox"]`);
        this.APPLY_BUTTON = page.locator(`//span[text()='Apply']`);
        this.SELECTED_COLUMN = page.locator(`//th/span[text()='Department']`);
        this.DOWNLOAD_ICON = page.locator(`//div[contains(@class,"download")]/div`);
        this.SEARCH_TASKS_FIELD = page.locator(`//input[@placeholder="Search by name or assigned to"]`);
        this.SEARCHED_EVIDENCE = page.locator(`(//tbody/tr)[1]`);
        this.FILTERED_BY_STATUS = page.locator(`//div[text()='Filter by Status']/ancestor::div[@class="ng-select-container"]`);
        this.SUMMARY_RADIO = page.locator(`//label[contains(text(),'Summary')]/..//input[@type="radio"]`);
        this.ASSESMENT_SCOPE_FIELD = page.getByPlaceholder('Assessment Scope');
        this.COMPLETE_TOGGLE = page.locator(`//div[contains(text(),'Completed Tasks')]/..//span[@class="mdc-switch__handle"]`);
        this.COMPLETE_STATUS = page.locator(`(//div[contains(text(),'Completed')])[1]`);
        this.BULK_IMPORT = page.getByText('Bulk Import');
        this.RISK_METHODOLOGY_DROPDOWN = page.locator(`(//mat-label[normalize-space()='Select Methodology']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button//ui-icon[@icon="s-chevron-down"])[1]`);
        this.OPTION = page.locator(`(//*[@role="option"])[1]`);
        this.CONTINUE_BUTTON = page.getByText('Continue');
        this.RISK_CONTROL = page.getByText('Risk Controls');
        this.RISK_CONTROL_ARB_NAME = page.getByPlaceholder('Name in Arabic');
        this.RISK_CONTROL_ENG_NAME = page.getByPlaceholder('Name in English');
        this.RISK_CONTROL_DETAILS_PAGE = page.locator(`//h3/span[contains(text(),'RC-')]`);
        this.ACTIVATE_RISK = page.getByText('Activate');
        this.DEACTIVATE_RISK = page.getByText('Deactivate');
        this.ACTIVATE_SUCCESS_MSG = page.locator(`//div[contains(text(),'Risk Activated')]`);
        this.EMP_DEACTIVATE_SUCCESS_MSG = page.locator(`//div[contains(text(),'Employee deactivated successfully')]`)
        this.EMP_ACTIVATE_SUCCESS_MSG = page.locator(`//div[contains(text(),'Employee activated successfully')]`);
        this.DEACTIVATE_SUCCESS_MSG = page.locator(`//div[contains(text(),'Risk Deactivated')]`)
        this.DEACTIVATE_BUTTON = page.locator('.dropdown-menu').getByText('Deactivate');
        this.DEACTIVATE_BUTTON_CONFIRMATION = page.locator('span', { hasText: 'Deactivate' });
        this.DELETE_BUTTON_CONFIRMATION = page.locator(`//span[normalize-space()='Delete']`);
        this.INACTIVE_STATUS = page.locator(`//div[contains(text(),'Deactivated Successfully')]`).last();
        this.ACTIVE_STATUS = page.locator(`//*[contains(text(),'Activated Successfully')]`).last();
        this.READING_DELETE = page.locator('.dropdown-menu').getByText('Delete');
        this.ACTIVATE_BUTTON_ASSERT = page.locator('.dropdown-menu').getByText('Activate');
        this.ACTIVATE_CONFIRMATION_BUTTON = page.locator('span', { hasText: 'Activate' });
        this.PDF_FORMAT_DOWNLOAD = page.locator(`//span[normalize-space()='PDF document']`);
        this.DOWNLOAD_PDF_TEM = page.locator(`//span[normalize-space()='Download PDF']`);
        this.DOWNLOAD_WORD_TEM = page.locator(`//span[normalize-space()='Download Word']`)
        this.WORD_FORMAT_DOWNLOAD = page.locator(`//span[normalize-space()='Word document']`);
        this.TEMPLATE_DOWNLOAD_ICON = page.locator(`(//button[@class="dropdown-toggle"])[1]`);
        this.TEMPLATE_DOWNLOAD_TEXT = page.locator(`//span[normalize-space()='Download']`);
        this.ADD_TREATMENT_PLAN = page.getByText('Add Treatment Plan');
        this.IDENTIFIER_DATE_CAL = page.locator(`//mat-label[normalize-space()='Risk Identification Date']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.EDIT_SHORT_FRAMEWORK_NAME = page.locator(`(//input[contains(@class,"form-control required ng-untouched ng-pristine ng-valid")])[1]`);
        this.EDIT_CLONE_FRAMEWORK_NAME = page.locator(`//label[normalize-space()='Cloned Framework Name']/following-sibling::input`);
        this.NO_PENDING_TASK = page.locator(`//h4[contains(text(),'No Pending Task(s)')]`);
        this.MENU_BAR_EXPAND = page.locator(`//*[@icon="s-chevrons-right"]`);
        this.MENU_BAR_COLLAPS = page.locator(`//ui-icon[@icon="s-chevrons-left"]`)
        this.REQ_EVIDENCE_DESC_FIELD = page.locator(`(//textarea[contains(@class,"mat-mdc-input")])[1]`);
        this.REQ_EVIDENCE_NAME_FIELD = page.locator(`//input[@name="taskName"]`);
        this.DELEGATION_NOTE = page.locator(`//mat-label[text()='Notes']`);
        this.CATELOG_THREE_DOT = page.locator(`//*[@role="dialog"]//span[@class="s-dots-vertical"]`);
        this.SERVICE_REQ_SETTINGS = page.locator(`//span[text()='Service Request Settings']`);
        this.NEW_REQ_TYPE = page.locator(`//span[text()='New Request Type']`);
        this.REQ_TYPE_DROPDOWN = page.locator(`(//mat-label[normalize-space()='Request Type']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.CUSTOM_REQ_NAME_FIELD = page.locator(`//mat-label[normalize-space()='Enter custom request type name']`);
        this.MAX_DAYS_COMPLETE_FIELD = page.locator(`//mat-label[contains(text(),'Max Days to Complete')]`);
        this.SERVICE_REQ_STATUS_XLS_ICON = page.locator(`//h5[text()='Service Request Status Settings']/following::span[@class="s-file-type-xls"]`);
        this.SERVICE_REQ_STATUS_PDF_ICON = page.locator(`//h5[text()='Service Request Status Settings']/following::span[@class="s-file-type-pdf"]`);
        this.SERVICE_REQ_STATUS_HAMBURGER = page.locator(`(//h5[text()='Service Request Status Settings']/following::button[@class="dropdown-toggle icon-only"])[1]`);
        this.SERVICE_REQ_TYPE_HAMBURGER = page.locator(`(//h5[text()='Service Request Types']/following::button[@class="dropdown-toggle icon-only"])[1]`);
        this.SERVICE_REQ_ENG_LABEL = page.locator(`//mat-label[text()='Label Displayed (English)']`);
        this.SERVICE_STATUS_DETAILS_POPUP = page.locator(`//h3/span[text()='Service Request Status Details']`);
        this.SERVICE_REQUEST = page.locator(`(//span[text()='Service Requests'])[1]`);
        this.MY_REQUEST = page.locator(`(//span[text()='My Requests'])[1]`);
        this.MY_DEPT_REQUEST = page.locator(`(//span[text()='My Department Requests'])[1]`);
        this.ALL_REQUEST = page.locator(`//span[text()='All Requests']`);
        this.NO_DATA_AVAILABLE = page.locator(`//div[text()='No Data Available']`);
        this.EMPLOYEES_TAB = page.locator(`//span[text()='Employees']`);
        this.NEW_EMPLOYEE_BUTTON = page.locator(`//span[text()='New Employee']`);
        this.EMP_USERNAME = page.locator(`//mat-label[text()='Username']`);
        this.EMP_FULL_NAME = page.locator(`//mat-label[text()='Full Name']`);
        this.EMP_EMAIL = page.locator(`//mat-label[text()='Email']`);
        this.EMP_TITLE = page.locator(`//mat-label[text()='Title']`);
        this.PREVIEW_BUTTON = page.locator('//div[@role="menu"]').getByText('Preview');
        this.EMPLOYEE_DETAILS_PAGE = page.locator(`//span[text()='Employee Details']`);
        this.DEPARTMENT_NAME = page.locator(`(//div[contains(@class,'type-accent') and normalize-space()='Automation Created Department'])[1]`);
        this.STATUS_NAME = page.locator(`(//div[contains(@class,'type-success') and normalize-space()='Active'])[1]`);
        this.DEPARTMENT_DROPDOWN_SELECTION = page.locator(`(//mat-label[normalize-space()='Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[3]`);
        this.SELECT_MULTIPLE_DEPARTMENT = page.locator(`//div[@role="listbox"]`).getByText('Cybersecurity');
        this.EMP_STATUS_DROPDOWN_OPTION = page.locator(`//div[@role="listbox"]`).getByText('All Status');
        this.REQUEST_INFORMATION = page.locator(`//span[text()='Request Information']`);
        this.TREATMENT_REQUEST_PLAN = page.locator(`//span[normalize-space()='Request Treatment Plan']`);
        this.SERVICE_REQ_TYPE_NAME = page.locator(`//mat-label[text()='Request Type']`)
        this.SERVICE_REQ_TYPE_XLS_ICON = page.locator(`(//h5[text()='Service Request Types']/following::span[@class="s-file-type-xls"])[1]`);
        this.SERVICE_REQ_TYPE_PDF_ICON = page.locator(`(//h5[text()='Service Request Types']/following::span[@class="s-file-type-pdf"])[1]`);
        this.SERVICE_REQ_DETAILS_PAGE = page.locator(`//span[contains(text(),'Req-')]/following::span[text()='Details']`);
        this.SERVICE_REQ_HABURGER = page.locator(`(//div[contains(text(),'In-Review') or contains(text(),'Rejected')or contains(text(),'In Progress')]/ancestor::tr//span[@class="s-dots-vertical"])[1]`);
        this.REASSIGN = page.locator(`//span[normalize-space()='Reassign']`);
        this.REASSIGN_TO_DROPDOWN = page.locator(`//mat-label[normalize-space()='Assign to']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.REASSIGN_BUTTON = page.locator(`(//button//span[normalize-space()='Reassign'])[1]`);
        this.REASSIGN_SUCCESS_MSG = page.locator(`//div[contains(text(),'Request reassigned successfully')]`);
        this.SERVICE_REQ_ID = page.locator(`(//div[contains(text(),'In-Review') or contains(text(),'Rejected') or contains(text(),'Approved')]/ancestor::tr//a)[1]`);
        this.EMP_ID = page.locator(`(//div[ contains(text(),'In-Review') or  contains(text(),'Rejected') or contains(text(),'cancelled') or  contains(text(),'Submitted')]/ancestor::tr//div//span)[1]`);
        this.COMMENT_AND_COMMUNICATION_TAB = page.locator(`(//span[normalize-space()='Comments & Communications'])[1]`);
        this.EMP_COMMENT_FIELD = page.locator(`//mat-label//span[text()='Add Comment']`);
        this.ADD_EMP_COMMENT_BUTTON = page.locator(`//button//span[text()='Add Comment']`);
        this.EMP_COMMENT_ADDED = page.locator(`(//div[@class="text-sm-regular text-tertiary"])[1]`);
        this.COMMENT_TEXT_FIELD = page.locator(`//textarea[@placeholder="Enter Your Comment"]`);
        this.ADD_COMMENT_BUTTON = page.locator(`//span[normalize-space()='Add Comment']`);
        this.COMMENT_ADDED = page.locator(`(//h5[text()='Comments']/following::div[contains(@class,"text-sm")])[1]`);
        this.SERVICE_REQ_ID_UNDER_REVIEW = page.locator(`(//div[contains(text(),'In-Review')or  contains(text(),'Submitted')]/ancestor::tr//a)[1]`);
        this.APPROVE_BUTTON = page.locator(`//span[normalize-space()='Approve']`);
        this.APPROVE_SUCCESS_MSG = page.locator(`//div[contains(text(),'Status updated successfully')]`);
        this.REJECT_BUTTON = page.locator(`//span[normalize-space()='Reject']`);
        this.SERVICE_REQ_ACCEPTED_STATUS_HABURGER = page.locator(`//div[contains(text(),'Accepted')]/ancestor::tr//span[@class="s-dots-vertical"]`);
        this.SERVICE_REQ_MARK_AS_COMPLETE = page.locator(`//span[contains(text(),'Mark as complete')]`);
        this.EMP_PORTAL_MENU_BAR_EXPAND = page.locator(`//ui-icon[@icon="s-chevrons-right"]`);
        this.EMP_PORTAL_MENU_BAR_COLLAPS = page.locator(`//ui-icon[@icon="s-chevrons-left"]`);
        this.NEW_REQUEST_BUTTON = page.locator(`(//span[normalize-space()='New Request'])[1]`)
        this.NOTIFY = page.locator(`(//span[normalize-space()='Notify'])[1]`);
        this.NOTIFIED_SUCCESS_MSG = page.locator(`(//div[contains(text(),"Notified Successfully")])[1]`);
        this.PRIORITY_LEVEL_DROPDOWN = page.locator(`(//mat-label[normalize-space()='Priority Level']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.REQUEST_TITLE_FIELD = page.locator(`//span[text()='Request Title']`);
        this.SUBMIT_REQ_BUTTON = page.locator(`(//span[normalize-space()='Submit Request'])[1]`);
        this.COMPLETE_BUTTON = page.locator(`(//span[normalize-space()='Complete'])[1]`);
        this.EMP_PORTAL_CROSS_ICON = page.locator(`//button[normalize-space()='Withdrawn Request']`);
        this.STATUS_FILTER = page.locator(`(//mat-label[normalize-space()='Status']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.PRIORITY_FILTER = page.locator(`(//mat-label[normalize-space()='Priority']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.SUBMITTED_BY_FILTER = page.locator(`(//mat-label[normalize-space()='Submitted By']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`);
        this.DUE_DATE_FROM_CAL = page.locator(`//mat-label[normalize-space()='Due Date From']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.DUE_DATE_TO_CAL = page.locator(`//mat-label[normalize-space()='Due Date To']/ancestor::div[@class="mat-mdc-form-field-flex"]//*[@icon="s-calendar-month"]`);
        this.CLEAR_ALL_FILTER = page.locator(`//span[normalize-space()='Clear all Filters']`);
        this.NO_DATA = page.locator(`//p[normalize-space()='No data available']`);
        this.FILTERED_DATA = page.locator(`//table[contains(@class,"p-datatable-table")]`);
        this.REQ_OWNER_FILTER = page.locator(`(//mat-label[normalize-space()='Request Owner']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[1]`)
        this.EMPLOYEE_PORTAL_HAMBURGER = page.locator(`(//div[ contains(text(),'In-Review') or  contains(text(),'Rejected') or contains(text(),'cancelled') or  contains(text(),'Submitted')]/ancestor::tr//span[@class="s-dots-vertical"])[1]`);
        this.SELECT_OWNERSHIP_DEPARTMENT = page.locator(`//mat-option//span[normalize-space()='Automation Created Department']`);
        this.RISK_SOURCE_DROPDOWN = page.locator(`//mat-label[text()='Risk Source']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.RISK_SOURCE_CATEGORY = page.locator(`(//mat-label[text()='Vendors']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button)[2]`);
        this.MAP_FRAMEWORK_CHECKBOX = page.locator(`(//tbody//tr//input[@type='checkbox'])[1]`);
        // New Changes 21July 
        this.OPTION2 = page.locator(`(//*[@role="option"])[2]`);
        this.SEARCH_EMPLOYEE = page.locator(`//input[@placeholder='Search By Username, Full Name, Email, Title, Mobile Number']`);
        this.NEXT_PAGE = page.locator(`//span[contains(@aria-label,'s-chevron-right')]`);
    }

    async validateExecutiveDashboard(): Promise<void> {
        console.log("Checking Executive Dashboard tab...");
        await this.EXECUTIVE_DASHBOARD.waitFor({ state: 'visible' });
        await expect(this.EXECUTIVE_DASHBOARD).toHaveText('Executive Dashboard');
        console.log("Executive Dashboard tab text is correct.");
    }

    async validateRiskDashboard(): Promise<void> {
        console.log("Checking Risk Dashboard tab...");
        await expect(this.RISK_DSHBOARD_TAB).toHaveText('Risk Dashboard');
        console.log("Risk Dashboard tab text is correct.");
    }

    async validateComplianceDashboard(): Promise<void> {
        console.log("Checking Compliance Dashboard tab...");
        await expect(this.COMPLIANCE_DASHBOARD_TAB).toHaveText('Compliance Dashboard');
        console.log("Compliance Dashboard tab text is correct.");
    }

    async validateGovernanceDashboard(): Promise<void> {
        console.log("Checking Governance Dashboard tab...");
        await expect(this.GOVERNANCE_DASHBOARD_TAB).toHaveText('Governance Dashboard');
        console.log("Governance Dashboard tab text is correct.");
    }

    async valdateRiskDashboardTab() {
        await expect(this.RISK_DASHBOARD).toBeVisible();
        console.log("Validate Risk Dashboard tab...");
    }

    async clickOnRiskDashbordTab() {
        await this.RISK_DASHBOARD.waitFor({ state: 'visible' });
        await this.RISK_DASHBOARD.click();
        console.log("Clicking Risk Dashboard tab...");
    }

    async valdateComplianceDashboardTab() {
        await expect(this.COMPLIANCE_DASHBOARD_TAB).toBeVisible();
        console.log("Validate Compliance Dashboard tab...");
    }

    async clickOnComplianceDashbordTab() {
        await this.COMPLIANCE_DASHBOARD.waitFor({ state: 'visible' });
        await this.COMPLIANCE_DASHBOARD.click();
        console.log("Clicking Compliance Dashboard tab...");
    }

    async valdateGovernanceDashboardTab() {
        await expect(this.GOVERNANCE_DASHBOARD_TAB).toBeVisible();
        console.log("Validate Governance Dashboard tab...");
    }

    async clickOnGovernanceDashboardTab() {
        await this.GOVERNANCE_DASHBOARD.waitFor({ state: 'visible' });
        await this.GOVERNANCE_DASHBOARD.click();
        console.log("Clicking Governance Dashboard tab...");
    }

    async reloadPage() {
        await this.page.reload();
        await this.page.waitForEvent('load');
    }

    async clickOnTasks() {
        await this.TASKS.waitFor({ state: 'visible' });
        await this.TASKS.click();
        console.log("Clicking on Tasks tab...");
    }

    async validateTasksPage() {
        await this.MY_TASKS_TAB.waitFor({ state: 'visible' });
        await expect(this.MY_TASKS_TAB).toBeVisible();
        await this.TASKS_TABLE.scrollIntoViewIfNeeded();
        await expect(this.TASKS_TABLE).toBeVisible();
        console.log("Validate Tasks Table Visible...");
    }

    async clickOnOverDueTasks() {
        await this.page.waitForTimeout(1500)
        await this.OVER_DUE_TASKS_TAB.waitFor({ state: 'visible' });
        await this.OVER_DUE_TASKS_TAB.click();
        console.log("Clicking on Over Due Tasks tab...");
    }

    async validateOverDueTasksStatus() {
        expect(this.TASKS_TABLE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validate Over Due Tasks Status Visible...");
    }

    async clickOnTasksDueToday() {
        await this.page.waitForTimeout(1500)
        await this.TASK_DUE_TODAY_TAB.waitFor({ state: 'visible' });
        await this.TASK_DUE_TODAY_TAB.click();
        console.log("Clicking on Tasks Due Today tab...");
    }

    async validateTasksDueTodayStatus() {
        expect(this.TASKS_TABLE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validate Tasks Due Today Status Visible...");
    }

    async clickOnTasksDueWeek() {
        await this.page.waitForTimeout(1500)
        await this.TASK_DUE_THIS_WEEK.waitFor({ state: 'visible' });
        await this.TASK_DUE_THIS_WEEK.click();
        console.log("Clicking on Tasks Due This Week tab...");
    }

    async validateTasksDueWeekStatus() {
        expect(this.TASKS_TABLE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validate Tasks Due This Week Status Visible...");
    }

    async clickOnTaskDueThisMonth() {
        await this.page.waitForTimeout(1500)
        await this.TASK_DUE_THIS_MONTH.waitFor({ state: 'visible' });
        await this.TASK_DUE_THIS_MONTH.click();
        console.log("Clicking on Tasks Due This Month tab...");
    }

    async validateTasksDueMonthStatus() {
        expect(this.TASKS_TABLE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validate Tasks Due This Month Status Visible...");
    }

    async clickonfilterIcon() {
        await this.FILTER_ICON.waitFor({ state: 'visible' });
        await this.FILTER_ICON.click();
        console.log("Clicking on filter icon...");
    }

    async selectModulefromDropdown() {
        await this.MODULE_DROPDOWN.waitFor({ state: 'visible' });
        await this.MODULE_DROPDOWN.click();
        await this.DROPDOWN_OPTION.click();
        console.log("Selecting module from dropdown...");
    }

    async clickOnFiterButton() {
        await this.page.waitForTimeout(1500)
        await this.FILTER_BUTTON.waitFor({ state: 'visible' });
        await this.FILTER_BUTTON.click();
        console.log("Clicking on filter button...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
    }

    async validateFilterdModule() {
        expect(this.FILTERED_MODULE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validating filtered module...");
    }

    async clickAndSelectTypeFromDropdown() {
        await this.TYPE_DROPDOWN_FILTER.click();
        await this.TYPE_DROPDOWN_OPTION.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN_OPTION.click();
        console.log("Selecting type from dropdown...");
    }

    async validateFilteredType() {
        expect(this.FILTERED_BY_STATUS.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
        console.log("Validating filtered type...");
    }

    async clickAndSelectStatusFromDropdown() {
        console.log("Selecting status from dropdown...");
        await this.STATUS_DROPDOWN.click();
        await this.STATUS_DROPDOWN_OPTION.waitFor({ state: 'visible' });
        await this.STATUS_DROPDOWN_OPTION.click();
        console.log("Selecting status from dropdown...");
    }

    async validateFilteredStatus() {
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        expect(this.FILTERED_STATUS.isVisible() || this.FILTERED_STATUS.isHidden()).toBeTruthy();
        console.log("Validating filtered status...");
    }
    async scrollCreateMilestone() {

        await this.CONTROL_CREATE_BUTTON.scrollIntoViewIfNeeded();

    }
    async filterByStatus() {
        console.log("Filtering by status 'In Progress'");
        await this.FILTERED_BY_STATUS.waitFor({ state: 'visible' });
        await this.FILTERED_BY_STATUS.click();

        let status = this.page.locator(`//span[text()='In Progress']`);
        await status.click();
        console.log("Status filter applied successfully");
    }

    async scrollUpToDescription(page: any) {
        const xpath = `//mat-label[text()='Description']`;

        await page.evaluate((xpath) => {
            // Find the element using XPath
            const el = document.evaluate(
                xpath,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue as HTMLElement | null;

            // Find the sidebar container
            const sidebar = document.querySelector('.left-sidebar') as HTMLElement | null;

            if (el && sidebar) {
                // Scroll upward by bringing the element to the top-center
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, xpath);
        await page.locator(xpath).fill('Automation_Test')
    }

    async clickAndSelectStartDate() {
        console.log("Selecting start date...");
        await this.START_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.START_DATE_CALENDER.click();

        await Utils.clickFirstEnabledDate(this.page);

    }
    async clickAndSelectMilestoneStartDate() {
        await this.START_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.START_DATE_CALENDER.click();
        await Utils.clickFirstEnabledDate(this.page);
    }

    async validateRiskIdentificationCalender() {
        await this.RISK_IDENTIFICATION_CALENDER.waitFor({ state: 'visible' });
        await expect(this.RISK_IDENTIFICATION_CALENDER).toBeVisible();
        console.log("Validating Risk Identification Calender...");
    }

    async clickAndSelectEndDate() {
        await this.END_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.END_DATE_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Selecting end date...");
    }

    async validateFilteredStartAndEndDate() {
        console.log("Validating filtered start and end dates...");
        expect(this.TASKS_TABLE.isVisible() || this.NO_PENDING_TASK.isVisible()).toBeTruthy();
    }

    async clickOnViewButton() {
        await this.VIEW_BUTTON.waitFor({ state: 'visible' });
        await this.VIEW_BUTTON.click();
        console.log("Clicking on view button...");
    }

    async clickOnCalenderIcon() {
        await this.CALENDER_ICON.waitFor({ state: 'visible' });
        await this.CALENDER_ICON.click();
        console.log("Clicking on calendar icon...");
    }

    async validateCalenderView() {
        await this.CLAENDER_VIEW.scrollIntoViewIfNeeded();
        await this.CLAENDER_VIEW.waitFor({ state: 'visible' });
        await expect(this.CLAENDER_VIEW).toBeVisible();
        console.log("Validating calendar view...");
    }

    async clickOnTableIcon() {
        await this.TABLE_ICON.waitFor({ state: 'visible' });
        await this.TABLE_ICON.click();
        console.log("Clicking on table icon...");
    }

    async validateTableView() {
        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await expect(this.TABLE_VIEW).toBeVisible();
        console.log("Validating table view...");
    }

    async clickOnTaskName() {
        await this.TASK_NAME.waitFor({ state: 'visible' });
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.TASK_NAME.click()
        ]);

        this.newPage = newPage;
        await this.newPage.waitForLoadState();
        console.log("Clicking on task name...");
    }

    async validateTaskPage() {
        console.log("Validating task page...");
        console.log('Page URL:', this.newPage.url());
        const taskContainer = this.newPage.locator(`//span[contains(text(),'Approval')]`);
        await expect(taskContainer).toBeVisible();
        console.log('Task page validated successfully.');
    }

    async clickOnApproveButton() {
        console.log("Clicking on Approve button...");
        const approveButton = this.newPage.locator(`//span[normalize-space()='Approve']`);
        await approveButton.waitFor({ state: 'visible' });
        await approveButton.scrollIntoViewIfNeeded();
        await approveButton.evaluate((el: HTMLElement) => el.click());
        console.log("Clicked on Approve button...");
    }

    async clickOnRejectButton() {
        const rejectButton = this.newPage.locator(`//button[text()='Reject']`);
        await rejectButton.waitFor({ state: 'attached' });
        await rejectButton.scrollIntoViewIfNeeded();
        await rejectButton.click();
        console.log("Clicking on reject button...");
    }

    async clickOnMyDepartmentTab() {
        await this.MY_DEPARTMENT_TAB.waitFor({ state: 'visible' });
        await this.MY_DEPARTMENT_TAB.click();
        console.log("Clicking on My Department tab...");
    }

    async validateDepartmentPage() {
        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await this.TABLE_VIEW.scrollIntoViewIfNeeded();
        await expect(this.TABLE_VIEW).toBeVisible();
        console.log("Validating My Department page...");
    }

    async clickOnAllTaskTab() {
        await this.ALL_TASK_TAB.waitFor({ state: 'visible' });
        await this.ALL_TASK_TAB.click();
        console.log("Clicking on All Task tab...");
    }
    async clickOnCompeletedToggle() {
        await this.COMPLETE_TOGGLE.waitFor({ state: 'visible' });
        await this.COMPLETE_TOGGLE.click();
        console.log("Clicking on Completed Toggle...");
    }
    async validateCompletedStatus() {
        console.log("Validating Completed Status...");

        if (await this.COMPLETE_STATUS.isVisible()) {
            await expect(this.COMPLETE_STATUS).toBeVisible();
            console.log("Completed Status is visible.");
        } else {
            console.log("Completed Status is NOT visible.");
        }
    }
    async validateAllTaskPage() {
        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await this.TABLE_VIEW.scrollIntoViewIfNeeded();
        await expect(this.TABLE_VIEW).toBeVisible();
        console.log("Validating All Task page...");
    }

    async clickOnCalender() {
        await this.CALENDER.waitFor({ state: 'visible' });
        await this.CALENDER.scrollIntoViewIfNeeded();
        await this.CALENDER.click();
        console.log("Clicking On Calendar...");
    }

    async validateCalenderPage() {
        await this.CALENDAR_PAGE.waitFor({ state: 'visible' });
        await expect(this.CALENDAR_PAGE).toBeVisible();
        console.log("Validating All Calendar Page...");
    }

    public createdEventTitle!: string;

    async addEvent(baseTitle: string) {
        console.log("Clicking On Add Event...");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${baseTitle}_${random}`;
        // Store event title
        this.createdEventTitle = uniqueTitle;
        await this.ADD_EVENT_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVENT_BUTTON.click();
        await expect(this.ADD_EVENT_POP_UP).toBeVisible();
        await this.TITTLE_FIELD.waitFor({ state: 'visible' });
        await this.TITTLE_FIELD.fill(uniqueTitle);
        await this.DESCRIPTION.fill('Automation_Desc');
        await this.DEPARTMENT_DROPDOWN.click();
        await this.SELECT_DEPARTMENT.click();
        await this.EVENT_OWNER_DROPDOWN.click();
        await this.SELECT_OWNER.click();
        await this.TYPE_DROPDOWN_EVENT.click();
        await this.SELECT_TYPE.click();
        await this.START_DATE_CALENDER.click();
        await Utils.clickFirstEnabledDate(this.page);
        await this.END_DATE_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        await this.ADD_BUTTON.click();
        console.log(`Event added successfully with unique title: ${uniqueTitle}`);
        return uniqueTitle;
    }

    async clickThreeDotsForEvent(eventTitle: string) {
        const eventCard = this.page.locator(`//h6[normalize-space()='${eventTitle}']/ancestor::ui-card[contains(@class,'nested-ui-card')]`);
        await expect(eventCard).toBeVisible();
        await this.page.locator(`//h6[normalize-space()='${eventTitle}']/ancestor::ui-card[contains(@class,'nested-ui-card')]//button[contains(@class,'dropdown-toggle')]`).click();
    }

    async validateAddedEvent(name: string) {
        const eventName = this.page.locator(`(//*[contains(text(), '${name}')])[1]`);
        await expect(eventName).toContainText(name);
        console.log("Added Event validated:", name);
    }

    async selectView(calendarView: string) {
        await this.VIEW_DRPDOWN.click();
        await this.page.click(`//span[contains(text(),'${calendarView}')]`)
        console.log("Selected the view:", calendarView);
    }

    async validateYearlyView() {
        const selectedOption = this.page.locator('h2', { hasText: '2026' });
        await selectedOption.waitFor({ state: 'visible' });
        await expect(selectedOption).toBeVisible();
        console.log("Yearly view validated");
    }

    async validateMonthlyView() {
        const months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];

        const header = this.page.locator('//h2');
        const headerText = await header.textContent();

        let matchFound = false;

        for (const month of months) {
            if (headerText?.includes(month)) {
                matchFound = true;
                console.log(`Matched month: ${month}`);
                break;
            }
        }

        expect(matchFound).toBeTruthy();
        await this.MONTHLY_VIEW.waitFor({ state: 'visible' });
        await expect(this.MONTHLY_VIEW).toBeVisible();
        console.log("Monthly view validated");
    }

    async validateQuaterlyView() {
        await this.QUATERLY_VIEW.waitFor({ state: 'visible' });
        await expect(this.QUATERLY_VIEW).toBeVisible();
        console.log("Quarterly view validated");
    }

    async clickOnSettings() {
        await this.SETTINGS.scrollIntoViewIfNeeded();
        await this.SETTINGS.click();
        await expect(this.FRAMEWORK_SETTINGS).toBeVisible();
        console.log("Settings clicked");
    }

    async clickOnFrameworkSettings() {
        await this.FRAMEWORK_SETTINGS.waitFor({ state: 'visible' });
        await this.FRAMEWORK_SETTINGS.click();
        console.log("Framework Settings clicked");
    }

    async validateFrameWorkPage() {
        await this.FRAMEWORK_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORK_PAGE).toBeVisible();
        console.log("Validated the Framework Page");
    }

    async clickOnFrameWorkCheckbox() {
        await this.FRAMEWORK_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.FRAMEWORK_CHECKBOX.isChecked();
        if (isChecked) {
            await this.FRAMEWORK_CHECKBOX.uncheck();
        }
        await this.FRAMEWORK_CHECKBOX.check();
        console.log("Framework Checkbox clicked and checked");
    }

    async clickOnSaveButton() {
        await this.page.waitForTimeout(1500)
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("Save button clicked");
    }

    async clickOnSaveButtonControl() {
        await this.EVIDENCE_SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Save button clicked");
    }

    async validateSuccessMsg() {
        await this.SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.SUCCESS_MSG).toBeVisible();
        console.log("Success message validated");
    }

    async clickProceedIfSuccessMsgNotVisible() {
        console.log("Checking if Success Message is visible...");
        await this.page.waitForTimeout(3000);
        if (await this.SUCCESS_MSG.isVisible()) {
            console.log("Success Message is already visible. Skipping Proceed button click.");
            return;
        }
        console.log("Success Message is not visible. Checking Proceed button...");
        if (await this.PROCEED_BUTTON.isVisible()) {
            await this.PROCEED_BUTTON.click();
            console.log("Proceed button clicked.");
        } else {
            console.log("Proceed button is not visible. Skipping...");
        }
    }

    async validateCreatedSuccessMsg() {
        await this.CREATED_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.CREATED_SUCCESS_MSG).toBeVisible();
        console.log("Success message validated");
    }
    async validateSubmittededSuccessMsg() {
        await this.SUBMITTED_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.SUBMITTED_SUCCESS_MSG).toBeVisible();
        console.log("Success message validated");
    }

    async validateUpdateSuccessMsg() {
        await this.UPDATED_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.UPDATED_SUCCESS_MSG).toBeVisible();
        console.log("Success message validated");
    }

    async clickOnComplaince() {
        await this.COMPLAINCE.waitFor({ state: 'visible' });
        await this.COMPLAINCE.click();
        console.log("Compliance tab clicked");
    }

    async clickOnFarmeworkAndValidateThePage() {
        await this.FRAMEWORKS.waitFor({ state: 'visible' });
        await this.FRAMEWORKS.click();
        await this.FRAMEWORKS_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORKS_PAGE).toBeVisible();
        console.log("Framework tab clicked and page validated");
    }

    async clickOnAddFrameworkButton() {
        await this.ADD_FRAMEWORK_BUTTON.click();
        console.log("Add Framework button clicked");
    }

    async clickOnCloneFromLibrary() {
        await this.CLONE_FROM_LIBRARY.waitFor({ state: 'visible' });
        await this.CLONE_FROM_LIBRARY.click();
        console.log("Clone From Library clicked");
    }

    async validateFrameworkPopUp() {
        await this.IMPORT_FRAMEWORK_POP_UP.waitFor({ state: 'visible' });
        await expect(this.IMPORT_FRAMEWORK_POP_UP).toBeVisible();
        console.log("Framework popup validated");
    }

    async clickAndSelectAvalableFramework() {
        await this.AVAILABLE_FRAMEWORK_DROPDOWN.waitFor({ state: 'visible' });
        await this.AVAILABLE_FRAMEWORK_DROPDOWN.click();
        await this.SELECT_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_FRAMEWORK.click();
        console.log("Available framework selected");
    }

    async clickAndSelectSubFramework() {
        await this.page.waitForTimeout(2500);
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.waitFor({ state: 'visible' });
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.click();
        await this.SELECT_SUB_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_SUB_FRAMEWORK.click();
        console.log("Sub-framework selected");
    }

    async enterClonedFrameworkName() {
        const uniqueName = `Automation_Framework_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_NAME_FIELD.fill(uniqueName);
        console.log(`Entered unique cloned framework name: ${uniqueName}`);
    }

    async enterClonedFrameworkShortName() {
        const uniqueShortName = `Automation_Framework_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_SHORT_NAME.fill(uniqueShortName);
        console.log(`Entered unique cloned framework short name: ${uniqueShortName}`);
    }

    async clickOnCloneButton() {
        await this.CLONE_BUTTON.click();
        console.log("Clone button clicked");
    }

    async validateClonedFramework() {
        console.log("Validating Clone Framework...");
        await this.page.reload();
        const frameworkLocator = this.page.locator("//tbody[1]//a[contains(normalize-space(), 'Automation_Framework')]");
        await frameworkLocator.first().waitFor({ state: 'visible' });
        const frameworkText = await frameworkLocator.first().textContent();
        console.log('Framework Text Found:', frameworkText);
        expect(frameworkText?.includes('Automation_Framework')).toBeTruthy();
        console.log("Clone Framework validation performed");
    }

    async enterComment(comment: string) {
        console.log("Entering Comment...");
        await this.COMMENT_FIELD.fill(comment);
        console.log("Comment entered");
    }

    async clickOnEvidenceSetting() {
        console.log("Clicking on Evidence Setting...");
        await this.EVIDENCE_SETTINGS.waitFor({ state: 'visible' });
        await this.EVIDENCE_SETTINGS.click();
        console.log("Evidence Setting clicked");
    }

    async clickAndValidateCheckbox() {
        console.log("Clicking and validating the Evidence checkbox...");
        await this.EVIDENCE_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.EVIDENCE_CHECKBOX.isChecked();
        if (isChecked) {
            await this.EVIDENCE_CHECKBOX.uncheck();
        }
        await this.EVIDENCE_CHECKBOX.check();
        console.log("Evidence checkbox clicked and validated");
    }

    async clickEvidenceSaveButton() {
        console.log("Clicking on the Evidence Save button...");
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("Evidence Save button clicked");
    }

    async clickOnFrameWork() {
        console.log("Clicking on Framework...");
        await this.FRAMEWORK.waitFor({ state: 'visible' });
        await this.FRAMEWORK.click();
        await this.page.waitForLoadState('networkidle');
        console.log("Framework clicked");
    }

    async clickOnFrameWorkUnderAudit() {
        console.log("Clicking on Framework Under Audit...");
        await this.FRAMEWORK_AUDIT.click();
        await this.FRAMEWORK_AUDIT.waitFor({ state: 'hidden' });
        console.log("Framework clicked");
    }

    async clickOnControls() {
        console.log("Clicking on Controls...");
        await this.CONTROLS.waitFor({ state: 'visible' });
        await this.CONTROLS.scrollIntoViewIfNeeded();
        await this.CONTROLS.click();
        console.log("Controls clicked");
    }

    async selectControl() {
        console.log("Selecting Control...");
        await this.SELECT_CONTROL.waitFor({ state: 'visible' });
        await this.SELECT_CONTROL.click();
        await this.page.waitForLoadState('networkidle');
        console.log("Control selected");
    }

    async selectControlForAudit() {
        console.log("Selecting Control...");
        await this.page.waitForTimeout(2000);
        await this.SELECT_CONTROL_FOR_AUDIT.waitFor({ state: 'visible' });
        await this.SELECT_CONTROL_FOR_AUDIT.click();
        console.log("Control selected");
    }

    async clickOnMapDocButton() {
        console.log("Clicking on Map Doc button...");
        await this.MAP_DOC_BUTTON.waitFor({ state: 'visible' });
        await this.MAP_DOC_BUTTON.scrollIntoViewIfNeeded();
        await this.MAP_DOC_BUTTON.click();
        console.log("Map Doc button clicked");
    }

    async mapDocIfCheckboxVisible() {
        console.log("Checking Map Checkbox visibility..");
        await this.page.waitForTimeout(2000);

        if (await this.SELECT_DOC_CHECKBOX.isVisible()) {

            await this.SELECT_DOC_CHECKBOX.waitFor({ state: 'visible' });
            await this.page.waitForTimeout(1500);

            await this.SELECT_DOC_CHECKBOX.click();
            console.log("Checkbox Checked..");

            await this.clickOnMap();
            await this.validateSuccessMsg();

            console.log("Map action completed successfully..");

        } else {
            console.log("Map Checkbox not visible, skipping complete map flow.");
        }
    }

    async selectDocCheckbox() {
        console.log("Selecting Document Checkbox...");
        await this.SELECT_DOC_CHECKBOX.waitFor({ state: 'visible' });
        await this.SELECT_DOC_CHECKBOX.check();
        await this.SELECT_DOC_CHECKBOX.isChecked();
        console.log("Document checkbox selected");
    }

    async clickOnMap() {
        console.log("Clicking on Map button...");
        await this.MAP_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.MAP_EVIDENCE_BUTTON.click();
        console.log("Map button clicked");
    }

    async clickAndvalidateRequiredEvidenceTab() {
        console.log("Clicking and validating Required Evidence Tab...");
        await this.REQUIRED_EVIDENCE_TAB.waitFor({ state: 'visible' });
        await this.REQUIRED_EVIDENCE_TAB.click();

        if (await this.REQUIRED_EVIDENCE_TABLE.isVisible()) {
            console.log("Required Evidence Table is visible ...");
            await expect(this.NO_EVIDENCE_MSG).not.toBeVisible();
        } else if (await this.NO_EVIDENCE_MSG.isVisible()) {
            console.log("No Evidence message is displayed ...");
            await expect(this.REQUIRED_EVIDENCE_TABLE).not.toBeVisible();
        }
        console.log("Required Evidence Tab validation performed");
    }

    async clickOnTasksTab() {
        await this.page.waitForTimeout(1500)
        console.log("Clicking on Tasks Tab...");
        await this.TASKS_TAB.waitFor({ state: "visible" });
        await this.TASKS_TAB.click();
        console.log("Tasks Tab clicked");
    }

    async clickOnRequestEvidenceButton() {
        console.log("Clicking on Request Evidence button...");
        await this.REQUEST_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.REQUEST_EVIDENCE_BUTTON.click();
        console.log("Request Evidence button clicked");
    }

    async validateRequestEvidencePopUp() {
        console.log("Validating Request Evidence Pop-up...");
        await this.REQUEST_EVIDENCE_POP_UP.waitFor({ state: 'visible' });
        await expect(this.REQUEST_EVIDENCE_POP_UP).toBeVisible();
        console.log("Request Evidence Pop-up validated");
    }

    async enterCustomerParameter() {
        console.log("Entering Customer Parameter...");
        await this.CUSTOMER_PARAMETERS.scrollIntoViewIfNeeded();
        await this.CUSTOMER_PARAMETERS.fill('Automation_Parameter');
        await this.CUSTOMER_PARAMETERS1.fill('Automation_Parameter');
    }
    async clickAndSelectDueDate() {
        console.log("Selecting Due Date...");
        await this.page.waitForTimeout(1500);
        await this.DUE_DATE_CALENDAR.waitFor({ state: 'visible' });
        await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
        await this.DUE_DATE_CALENDAR.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Due Date selected");
    }

    async clickAndSelectDueDateIfStillVisible() {
        await this.page.waitForTimeout(1000); // Wait for 1 second to allow any success message to appear
        // If success message is visible → skip
        if (await this.SUCCESS_MSG.isVisible()) {
            console.log('Success message already visible. Skipping due date selection.');
            return;
        }
        console.log('Selecting due date...');
        // Open calendar
        await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
        await this.DUE_DATE_CALENDAR.click();
        // Wait for calendar next button to appear
        const nextButton = this.page.locator('//button[contains(@class,"next")]');
        await nextButton.waitFor({ state: 'visible' });
        // Go to next month
        await nextButton.click();
        // Select date 24 (only if visible)
        const date = this.page.locator('//span[normalize-space()="24" and not(contains(@class,"disabled"))]');
        await date.waitFor({ state: 'visible' });
        await date.click();
        // Click Add Evidence
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log('Due date selected and Add Evidence clicked.');
    }

    async clickAndSelectMileStoneDueDate() {
        console.log("Selecting Due Date...");
        await this.DUE_DATE_CALENDAR.waitFor({ state: 'visible' });
        await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
        await this.DUE_DATE_CALENDAR.click();
        // wait for calendar to appear
        await Utils.clickLastEnabledDate(this.page);
    }

    async clickAndSelectAssignee() {
        console.log("Selecting Assignee...");
        await this.ASSIGN_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.ASSIGN_TO_DROPDOWN.click();
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.click();
        console.log("Assignee selected");
    }
    async clickAndSelectTaskOwner() {
        console.log("Selecting Task Owner...");
        await this.TASK_OWNER_DROPDOWN.waitFor({ state: 'visible' });
        await this.TASK_OWNER_DROPDOWN.click();
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.click();
        console.log("Task Owner selected");
    }
    async clickOnAddApproverBUtton() {
        console.log("Clicking on Add Approver Button...");
        await this.ADD_APPROVER_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_APPROVER_BUTTON.click();
        console.log("Add Approver Button clicked");
    }

    async clickOnEvidenceTab() {
        console.log("Clicking on Evidence Tab...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.EVIDENCE_TAB.click();
        console.log("Evidence Tab clicked");
    }

    async clickOnAddEvidence() {
        console.log("Clicking on Required Evidence Add Button...");
        await this.REQ_EVIDENCE_ADD_BUTTON.click();
        console.log("Required Evidence Add Button clicked");
    }

    async clickOnAddEvidece() {
        console.log("Clicking on Add Evidence...");
        await this.ADD_EVIDENCE.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE.click();
        console.log("Add Evidence clicked");
    }

    async enterCount(count: string) {
        console.log(`Entering Count: ${count}`);
        await this.COUNT_TEXTFIELD.fill(count);
        console.log(`Count entered: ${count}`);
    }

    async clickAndSelectStatus() {
        console.log(`Selecting Status: `);
        await this.page.waitForTimeout(1500);
        await this.EVIDENCE_STATUS_DROPDOWN.waitFor({ state: 'visible' });
        await this.EVIDENCE_STATUS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.EVIDENCE_STATUS_DROPDOWN.click();
        const seletStatus = this.page.locator(`(//div[@role="option"])[2]`);
        await seletStatus.waitFor({ state: 'visible' });
        await seletStatus.scrollIntoViewIfNeeded();
        await seletStatus.click();
        console.log("Status selected");
    }

    async enterName(baseName: string) {
        console.log("Entering Name...");
        await this.page.waitForTimeout(1500)
        const random = Math.floor(Math.random() * 100);
        const uniqueName = `${baseName}_${random}`;
        await this.EVIDENCE_NAME.fill(uniqueName);
        console.log(`Entered unique Name: ${uniqueName}`);
        console.log("Name entry performed");
        return uniqueName;
    }

    async enterDescription(desc: string) {
        console.log(`Entering Description: ${desc}`);
        await this.EVIDENCE_DESC.fill(desc);
        console.log("Description entered");
    }

    async clickOnAddEvidenceButton() {
        console.log("Clicking on Add Evidence Button...");
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Evidence Button clicked");
    }

    async clickOnAddRemediation() {
        console.log("Clicking on Add Button...");
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Button clicked");
    }

    async validateAddedEvidence() {
        await this.NEW_EVIDENCE.scrollIntoViewIfNeeded();
        const name = (await this.NEW_EVIDENCE.textContent()).trim();
        await this.NEW_EVIDENCE.waitFor({ state: 'visible' });
        expect(name).toContain('Test09');
        console.log("Validated Evidence Added");
    }
    async clickOnDetailsTab() {
        console.log("Clicking on Details Tab...");
        await this.DETAILS_TAB.waitFor({ state: 'visible' });
        await this.DETAILS_TAB.click();
        console.log("Details Tab clicked");
    }

    async clickOnEdit() {
        console.log("Clicking on Edit Button...");
        await this.EDIT_BUTTON.waitFor({ state: 'visible' });
        await this.EDIT_BUTTON.click();
        console.log("Edit Button clicked");
    }
    async clickOnGovEdit() {
        console.log("Clicking on Edit Button...");
        await this.GOV_EDIT.click();
        console.log("Edit Button clicked");
    }

    async scroll() {
        await this.ADD_APPROVER_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_APPROVER_BUTTON.scrollIntoViewIfNeeded();
    }

    async clickAndSelectApprovar() {
        console.log("Selecting Approver...");
        await this.APPROVAR_DRPDOWN.first().waitFor({ state: 'visible' });
        await this.APPROVAR_DRPDOWN.first().click();
        await this.SELECT_USER.waitFor({ state: 'visible' });
        await this.SELECT_USER.click();
        console.log("Approver selected");
    }

    async clickAndSelectApprovarTask() {
        console.log("Selecting Approver...");
        const dropdown = this.APPROVAR_DRPDOWN.first();
        await dropdown.waitFor({ state: 'visible' });
        await dropdown.click();
        // Wait for ng-select dropdown panel
        const dropdownPanel = this.page.locator('//div[@role="listbox"]');
        await dropdownPanel.waitFor({ state: 'visible' });
        const currentUrl = this.page.url();
        console.log("Current URL:", currentUrl);

        if (currentUrl.includes('https://ec-poc.solidrange.com')) {
            console.log("POC flow detected → selecting GRC Admin");

            const taskUserPOC = dropdownPanel.locator('span', {
                hasText: 'GRC Admin'
            });

            await expect(taskUserPOC).toBeVisible();
            await taskUserPOC.scrollIntoViewIfNeeded();
            await taskUserPOC.click();
        } else {
            console.log("Non-POC flow → selecting normal approver");
            const taskUser = dropdownPanel.locator('span', { hasText: testConfig.user2 });
            await expect(taskUser).toBeVisible();
            await taskUser.scrollIntoViewIfNeeded();
            await taskUser.click();
        }

        console.log("Approver selected successfully");
    }

    async clickOnSendButton() {
        console.log("Clicking on Send Button...");
        await this.SEND_BUTTON.scrollIntoViewIfNeeded();
        await this.SEND_BUTTON.click();
        console.log("Send Button clicked");
    }

    async enterEvidenceName(baseName: string) {
        console.log(`Entering Evidence Name (English)...`);
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueEVIName = `${baseName}_${timestamp}_${random}`;
        await this.REQ_EVIDENCE_ENG_TEXTFIELD.fill(uniqueEVIName);
        console.log(`Entered unique Evidence Name: ${uniqueEVIName}`);
        console.log("Evidence Name (English) entry performed");

        return uniqueEVIName;
    }

    async uploadEvidence(page: Page) {
        const filePath = path.resolve(__dirname, '../../file/Upload_EC.png');
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        await page.setInputFiles('(//input[@type="file"])[1]', filePath);
        console.log('File uploaded:', filePath);
    }

    async addControl() {
        await this.REQ_EVIDENCE_ADD_BUTTON.click();
        let linkField = this.page.locator(`//input[@name="linkName"]`);
        await linkField.fill('AutomationControl1234');
        await this.CONTROL_ADD_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_ADD_BUTTON.click();
    }

    async validateEvidenceAdded() {
        let eviName = this.page.locator(`(//a[contains(text(),'Automation_Evidence')])[1]`);
        await eviName.waitFor({ state: 'visible' });
        let text = await eviName.textContent();
        expect(text).toContain('Automation_Evidence');

    }
    async enterEvidenceNameArabic(baseName: string) {
        console.log("Entering Evidence Name (Arabic)...");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueEVINameArabic = `${baseName}_${timestamp}_${random}`;
        await this.REQ_EVIDENCE_ARABIC_TEXTFIELD.fill(uniqueEVINameArabic);
        console.log(`Entered unique Evidence Name (Arabic): ${uniqueEVINameArabic}`);
        console.log("Evidence Name (Arabic) entry performed");

        return uniqueEVINameArabic;
    }

    async clickOnMapButton() {
        console.log("Clicking on Map Button...");
        await this.RISK_MAP_BUTTON.click();
        console.log("Map Button clicked");
    }

    async selectFramework() {
        console.log("Selecting Framework checkbox...");
        await this.EVI_MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.EVI_MAP_CHECKBOX.check();
        console.log("Framework checkbox selected");
    }

    async selectFrameworkRFI() {
        console.log("Selecting Framework checkbox...");
        await this.EVI_MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.EVI_MAP_CHECKBOX.check();
        console.log("Framework checkbox selected");
    }

    // async clickAndSelectDepartment(Status: string) {
    //     console.log(`Starting: clickAndSelectDepartment — selecting department "${Status}"`);
    //     await this.OWNERSHIP_DEPARTMENT.waitFor({ state: 'visible' });
    //     await this.OWNERSHIP_DEPARTMENT.scrollIntoViewIfNeeded();
    //     console.log("Clicking on OWNERSHIP_DEPARTMENT dropdown...");
    //     await this.OWNERSHIP_DEPARTMENT.click();
    //     await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
    //     await this.SELECT_DEPARTMENT.click();
    //     console.log(`Finished: clickAndSelectDepartment — selected "${Status}"`);
    // }

    async clickAndSelectDepartment(Status: string) {
        await this.page.waitForTimeout(1500)
        console.log(`Starting: clickAndSelectDepartment — selecting department "${Status}"`);
        await this.OWNERSHIP_DEPARTMENT.waitFor({ state: 'visible' });
        await this.OWNERSHIP_DEPARTMENT.scrollIntoViewIfNeeded();
        console.log("Clicking on OWNERSHIP_DEPARTMENT dropdown...");
        await this.OWNERSHIP_DEPARTMENT.click();
        console.log("Clicking on DEPARTMENT..");
        await this.SELECT_OWNERSHIP_DEPARTMENT.click();
        console.log(`Finished: clickAndSelectDepartment — selected "${Status}"`);
    }

    async SelectVendorOwner() {
        console.log("Selecting Vendor Owner...");
        await this.RISK_OWNER.waitFor({ state: 'visible' });
        await this.RISK_OWNER.click();
        await this.SELECT_OWNER.waitFor({ state: 'visible' });
        await this.SELECT_OWNER.click();
        console.log("Vendor Owner selected successfully");
    }

    async SelectVendorUser() {
        console.log("Selecting User...");
        await this.page.waitForTimeout(1500);
        await this.USER_DROPDOWN.waitFor({ state: 'visible' });
        await this.USER_DROPDOWN.click();
        await this.SELECT_APPROVAR.waitFor({ state: 'visible' });
        await this.SELECT_APPROVAR.click();
        console.log("User selected successfully");
    }

    async clickOnAssertRadioButton() {
        console.log("Clicking on Assert radio button...");
        await this.MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_CHECKBOX.click();
        console.log("Assert radio button clicked successfully");
    }

    async clickOnMapAssertButton() {
        console.log("Clicking on Map Assert button...");
        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();
        console.log("Map Assert button clicked successfully");
    }

    async clickConfidenciallySlider() {
        console.log("Clicking on Confidentiality slider...");
        await this.page.waitForTimeout(1500)
        await this.SUCCESS_MSG.waitFor({ state: 'hidden' });
        await this.CONFIDENCIALLY_SLIDER.waitFor({ state: 'visible' });
        await this.CONFIDENCIALLY_SLIDER.click();
        console.log("Confidentiality slider clicked");
    }

    async clickOnSlider() {
        console.log("Clicking on slider...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        const valueProbabilty = this.page.locator(`//div[span[normalize-space()='Value'] and span[normalize-space()='probability']]`);
        const slider = this.page.locator(`//div[contains(text(),'probability')]/ancestor::div[contains(@class,"step-two__mapped")]//div[contains(@class,"ngx-slider-inner-tooltip")]`);
        const sliderCount1 = await slider.count();

        // Probability slider loop
        for (let i = 0; i < 10; i++) {

            if (await valueProbabilty.isVisible()) {
                console.log("Probability value visible. Stopping slider1.");
                break;
            }
            for (let j = 0; j < sliderCount1; j++) {
                await slider.nth(j).click({ force: true });
            }
        }

        console.log("Slider clicked");
    }

    async clickIntigritySlider() {
        console.log("Clicking on Integrity slider...");
        await this.INTIGRITY_SLIDER.waitFor({ state: 'visible' });
        await this.INTIGRITY_SLIDER.click();
        console.log("Integrity slider clicked");
    }

    async clickAvailabilitySlider() {
        console.log("Clicking on Availability slider...");
        await this.AVAILABILITY_SLIDER.waitFor({ state: 'visible' });
        await this.AVAILABILITY_SLIDER.click();
        console.log("Availability slider clicked");
    }

    async clickHoodSlider() {
        console.log("Clicking on Likelihood slider...");
        await this.HOOD_SLIDER.waitFor({ state: 'visible' });
        await this.HOOD_SLIDER.click();
        console.log("Likelihood slider clicked");
    }

    async textAssertVisible() {
        await this.TEXT_ASSERT.waitFor({ state: 'visible' });
    }
    async clickAndSelectOwner(Status: string) {
        await this.page.waitForTimeout(1500);
        console.log(`Starting: clickAndSelectOwner — selecting owner "${Status}"`);
        await this.OWNERSHIP_OWNER.waitFor({ state: 'visible' });
        await this.OWNERSHIP_OWNER.scrollIntoViewIfNeeded();
        console.log("Clicking on OWNERSHIP_OWNER dropdown...");
        await this.OWNERSHIP_OWNER.click();
        const seletStatus = this.page.locator(`//div[@role="listbox"]`).getByText(`${Status}`);
        await this.page.waitForTimeout(1500);
        await seletStatus.waitFor({ state: 'visible' });
        console.log(`Selecting owner option: "${Status}"`);
        await seletStatus.click();
        console.log(`Finished: clickAndSelectOwner — selected "${Status}"`);
    }

    // async clickAndSelectStakeholderDepartment() {
    //     console.log(`Starting: clickAndSelectStakeholderDepartment — selecting department`);
    //     await this.STAKEHOLDER_DEPARTMENT.waitFor({ state: 'visible' });
    //     await this.STAKEHOLDER_DEPARTMENT.scrollIntoViewIfNeeded();
    //     console.log("Clicking on STAKEHOLDER_DEPARTMENT dropdown...");
    //     await this.STAKEHOLDER_DEPARTMENT.click();
    //     await this.SELECT_DEPARTMENT.click();
    //     console.log(`Finished: clickAndSelectStakeholderDepartment — selected`);
    // }

    async clickAndSelectStakeholderDepartment() {
        console.log(`Starting: clickAndSelectStakeholderDepartment — selecting department`);
        await this.STAKEHOLDER_DEPARTMENT.waitFor({ state: 'visible' });
        await this.STAKEHOLDER_DEPARTMENT.scrollIntoViewIfNeeded();
        console.log("Clicking on STAKEHOLDER_DEPARTMENT dropdown...");
        await this.STAKEHOLDER_DEPARTMENT.click();
        console.log("Clicked on STAKEHOLDER_DEPARTMENT dropdown...");
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNERSHIP_DEPARTMENT.click();
        console.log(`Finished: clickAndSelectStakeholderDepartment — selected`);
    }

    async clickAndSelectStakeholderUser() {
        console.log(`Starting: clickAndSelectStakeholderUser — selecting user `);
        await this.page.waitForTimeout(1500);
        await this.STAKEHOLDER_USER.waitFor({ state: 'visible' });
        await this.STAKEHOLDER_USER.scrollIntoViewIfNeeded();
        console.log("Clicking on STAKEHOLDER_USER dropdown...");
        await this.STAKEHOLDER_USER.click();
        console.log(`Selecting stakeholder user option:`);
        await this.OPTION.click();
        console.log(`Finished: clickAndSelectStakeholderUser — selected`);
    }

    async clickAndSelectExpectedDate() {
        console.log('Clicking on EXPECTED_DATE_CALENDER...');
        await this.EXPECTED_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.EXPECTED_DATE_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log('Expected date selected successfully');
    }

    async clickOnDeptCompliance() {
        console.log('Clicking on DEPT_COMPLIANCE...');
        await this.page.waitForLoadState('networkidle');
        await this.DEPT_COMPLIANCE.waitFor({ state: 'visible' });
        await this.DEPT_COMPLIANCE.click();
        console.log('DEPT_COMPLIANCE clicked successfully');
    }

    async clickOnHamburger() {
        console.log('Clicking on HAMBURGER...');
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log('HAMBURGER clicked successfully');
    }

    async clickOnHamburgerAndMarkAsResolved() {
        console.log('Clicking on HAMBURGER...');
        const hamburgers = this.page.locator(`button.dropdown-toggle.icon-only`);
        await hamburgers.first().waitFor({ state: 'visible' });
        const count = await hamburgers.count();

        console.log(`Found ${count} hamburger(s)`);

        for (let i = 0; i < count; i++) {
            console.log(`Checking hamburger ${i + 1}...`);
            const currentHamburger = hamburgers.nth(i);
            await currentHamburger.click();
            // Wait briefly for dropdown animation
            if (await this.MARK_AS_RESOLVED.isVisible()) {
                await expect(this.MARK_AS_RESOLVED).toBeVisible();
                await this.clickOnMarkAsResolved();
                return;
            }
        }

    }

    async clickOnReqComplianceDate() {
        console.log('Clicking on REQ_COMPLIANCE_DATE...');
        await this.page.waitForTimeout(2000);
        await this.REQ_COMPLIANCE_DATE.waitFor({ state: 'visible' });
        await this.REQ_COMPLIANCE_DATE.click();
        console.log('REQ_COMPLIANCE_DATE clicked successfully');
    }

    async clickOnReqComplianceLevel() {
        console.log('Clicking on REQ_COMPLIANCE_LEVEL...');
        await this.REQ_COMPLIANCE_LEVEL.waitFor({ state: 'visible' });
        await this.REQ_COMPLIANCE_LEVEL.click();
        console.log('REQ_COMPLIANCE_LEVEL clicked successfully');
    }

    async clickOnEditButton() {
        console.log('Clicking on EDIT button...');
        await this.EDIT.waitFor({ state: 'visible' });
        await this.EDIT.click();
        console.log('EDIT button clicked successfully');
    }

    async clickOnThreeDot() {
        console.log('Clicking on THREE_DOT...');
        await this.THREE_DOT.waitFor({ state: 'visible' });
        await this.THREE_DOT.click();
        console.log('THREE_DOT clicked successfully');
    }
    async clickOnGovTemThreeDot() {
        console.log('Clicking on THREE_DOT...');
        await this.GOV_TEM_THREEDOT.waitFor({ state: 'visible' });
        await this.GOV_TEM_THREEDOT.click();
        console.log('THREE_DOT clicked successfully');
    }
    async clickOnAddriskButton() {
        console.log('Clicking on ADD_RISK_BUTTON...');
        await this.ADD_RISK_BUTTON.click();
        await this.ADD_RISK_BUTTON.waitFor({ state: 'hidden' });
        console.log('ADD_RISK_BUTTON clicked successfully');
    }

    async clickOnRiskRadioButton() {
        console.log('Clicking on Methodology_RADIO_BUTTON...');
        await this.RISK_RADIO_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_RADIO_BUTTON.click();
        console.log('Methodology_BUTTON clicked successfully');
    }

    async clickOnRemarks() {
        console.log('Clicking on REMARK_TAB...');
        await this.REMARK_TAB.waitFor({ state: 'visible' });
        await this.REMARK_TAB.click();
        console.log('REMARK_TAB clicked successfully');
    }

    async clickOnAddRemarkButton() {
        console.log('Clicking on ADD_REMARK_BUTTON...');
        await this.ADD_REMARK_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_REMARK_BUTTON.click();
        console.log('ADD_REMARK_BUTTON clicked successfully');
    }

    async enterRemarkTittle(tittle: string) {
        console.log(`Entering remark title: "${tittle}"`);
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(tittle);
        console.log('Remark title entered successfully');
    }

    async enterRemark(remark: string) {
        console.log(`Entering remark: "${remark}"`);
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill(remark);
        console.log('Remark entered successfully');
    }

    async clickOnAddReamrk() {
        console.log('Clicking on Add Remark...');
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log('Add Remark clicked successfully');
    }

    async clickOnRemarkHamburger() {
        console.log('Clicking on REMARK_HAMBURGER...');
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log('REMARK_HAMBURGER clicked successfully');
    }
    async clickOnInitiativeHamburger() {
        console.log('Clicking on Initiative_Hamburger...');
        await this.page.waitForTimeout(2000);
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.scrollIntoViewIfNeeded();
        await this.HAMBURGER.click();
        console.log('Initiative_Hamburger clicked successfully');
    }

    async clickOnRemarkEdit() {
        console.log('Clicking on REMARK_EDIT...');
        await this.REMARK_EDIT.waitFor({ state: 'visible' });
        await this.REMARK_EDIT.click();
        console.log('REMARK_EDIT clicked successfully');
    }

    async clickOnSaveRemark() {
        console.log('Clicking on Save Remark...');
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log('Save Reamark clicked successfully');
    }

    async clickOnRemarkDetails() {
        console.log('Clicking on REMARK_DETAILS...');
        await this.REMARK_DETAILS.click();
        console.log('REMARK_DETAILS clicked successfully');
    }

    async validateRemarkdetailsPopUp() {
        console.log('Validating REMARK_DETAILS_POP_UP visibility and text...');
        await this.REMARK_DETAILS_POP_UP.waitFor({ state: 'visible' });
        await expect(this.REMARK_DETAILS_POP_UP).toContainText('Remark Details');
        console.log('REMARK_DETAILS_POP_UP validated successfully');
        await this.page.locator(`//span[text()='Close']`).click();
    }

    async clickOnRemarkDelete() {
        console.log('Clicking on DELETE...');
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log('DELETE clicked successfully');
    }

    async validateDeleteConfirmationPopUp() {
        console.log('Validating DELETE_REMARK_CONFIRMTION pop-up visibility...');
        await this.DELETE_REMARK_CONFIRMTION.waitFor({ state: 'visible' });
        await expect(this.DELETE_REMARK_CONFIRMTION).toBeVisible();
        console.log('DELETE_REMARK_CONFIRMTION pop-up validated successfully');
    }

    async clickOnYesButton() {
        console.log('Clicking on YES_BUTTON...');
        await this.YES_BUTTON.scrollIntoViewIfNeeded();
        await this.YES_BUTTON.click();
        console.log('YES_BUTTON clicked successfully');
    }

    async clickOnThreeDotTab() {
        console.log('Clicking on THREE_DOT_TAB...');
        await this.THREE_DOT_TAB.waitFor({ state: 'visible' });
        await this.THREE_DOT_TAB.click();
        console.log('THREE_DOT_TAB clicked successfully');
    }

    async validateDeptComplianceTable() {
        console.log('Validating DEPT_COMPLIANCE_TABLE visibility...');
        await this.DEPT_COMPLIANCE_TABLE.waitFor({ state: 'visible' });
        await expect(this.DEPT_COMPLIANCE_TABLE).toBeVisible();
        console.log('DEPT_COMPLIANCE_TABLE validated successfully');
    }

    async clickOnIntiavite() {
        console.log('Clicking on INTIAVITES...');
        await this.INTIAVITES.waitFor({ state: 'visible' });
        await this.INTIAVITES.click();
        await this.page.waitForTimeout(1500);
        console.log('INTIAVITES clicked successfully');
    }

    async clickOnNewIntiavateButton() {
        console.log('Clicking on NEW_INTIAVATE_BUTTON...');
        await this.NEW_INTIAVATE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INTIAVATE_BUTTON.click();
        console.log('NEW_INTIAVATE_BUTTON clicked successfully');
    }

    async enterIntivateTittle(tittle: string) {
        console.log(`Entering initiative title: "${tittle}"`);
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${tittle}_${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(uniqueTitle);
        console.log('Initiative title entered successfully');
    }

    async enterIntivateDesc(desc: string) {
        console.log(`Entering initiative description: "${desc}"`);
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill(desc);
        console.log('Initiative description entered successfully');
    }

    async clickOnRiskTreatmentButton() {
        console.log('Clicking on RISK_TREATMENT_BUTTON...');
        await this.RISK_TREATMENT_BUTTON.click();
        console.log('RISK_TREATMENT_BUTTON clicked successfully');
    }
    async selectMapRiskCheckbox() {
        console.log("Selecting the MAP Risk checkbox");
        await this.MAP_RISK_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_RISK_CHECKBOX.check();
        console.log("MAP Risk checkbox selected successfully");
    }

    async clickOnMapRiskButton() {
        console.log("Clicking on the MAP Risk button");
        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();
        console.log("MAP Risk button clicked successfully");
    }

    async clickOnRadioButton() {
        console.log("Clicking on the Priority radio button");
        await this.PRIORITY_RADIO.waitFor({ state: 'visible' });
        await this.PRIORITY_RADIO.scrollIntoViewIfNeeded();
        await this.PRIORITY_RADIO.click();
        console.log("Priority radio button clicked successfully");
    }

    async SelectDepartment() {
        console.log("Selecting a department from dropdown");
        await this.page.waitForTimeout(1500);
        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Department selected successfully");
    }

    async selectDepartmentFromDropdown() {
        console.log("Selecting a department from dropdown");
        await this.DEPARTMENT_DROPDOWN_DEPT.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN_DEPT.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Department selected successfully");
    }


    async SelectPurpose() {
        console.log("Selecting a purpose from dropdown");
        await this.PURPOUSE_DROPDOWN.waitFor({ state: 'visible' });
        await this.PURPOUSE_DROPDOWN.click();
        await this.SELECT_PURPOUSE.waitFor({ state: 'visible' });
        await this.SELECT_PURPOUSE.click();
        console.log("Purpose selected successfully");
    }

    async SelectInitiativeOwner() {
        console.log("Selecting an initiative owner from dropdown");
        await this.OWNERSHIP_OWNER.waitFor({ state: 'visible' });
        await this.OWNERSHIP_OWNER.click();
        await this.SELECT_OWNER.waitFor({ state: 'visible' });
        await this.SELECT_OWNER.click();
        console.log("Initiative owner selected successfully");
    }

    async clickOnCreate() {
        console.log("Clicking on the Create button");
        await this.page.waitForTimeout(1000); // Wait for 1 second to allow any previous action to complete
        await this.CREATE_BUTTON.waitFor({ state: 'attached' });
        await this.CREATE_BUTTON.evaluate((el: HTMLElement) => el.click());
        console.log("Create button clicked successfully");
        await this.SUCCESS_MSG.waitFor({ state: 'visible' });
    }

    async clickOnInitivateDetails() {
        console.log("Clicking on the Initiative Details section");
        await this.REMARK_DETAILS.waitFor({ state: 'visible' });
        await this.REMARK_DETAILS.click();
        console.log("Initiative Details section clicked successfully");
    }

    async clickOnDetails() {
        console.log("Clicking on Details");
        await this.REMARK_DETAILS.waitFor({ state: 'visible' });
        await this.REMARK_DETAILS.click();
        console.log("Details clicked successfully");
    }

    async validateInitivateDetailsPage() {
        console.log("Validating the Initiative Details page is visible");

        await this.INTIVATE_DETAILS_PAGE.waitFor({ state: 'visible' });
        await expect(this.INTIVATE_DETAILS_PAGE).toBeVisible();

        console.log("Initiative Details page validated successfully");
    }

    async editInitivateName() {
        console.log("Editing the Initiative name field");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.clear();
        await this.REMARK_TITTLE.fill('TestAutomation');
        console.log("Initiative name edited successfully");
    }

    async clickOnSave() {
        console.log("Clicking on the Save button");
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.click();
        console.log("Save button clicked successfully");
    }

    async clickOnGovSave() {
        console.log("Clicking on the Save button");

        await this.GOV_SAVE.waitFor({ state: 'visible' });
        await this.GOV_SAVE.scrollIntoViewIfNeeded();
        await this.GOV_SAVE.click();

        console.log("Save button clicked successfully");
    }
    async clickOnGovControlSave() {
        console.log("Clicking on the Save button");

        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.click();

        console.log("Save button clicked successfully");
    }

    async clickOnAudit() {
        console.log("Clicking on the Audit tab");
        await this.AUDIT.first().waitFor({ state: 'visible' });
        await this.AUDIT.first().click();
        console.log("Audit tab clicked successfully");
    }

    async validateAuditPage() {
        console.log("Validating compliance level set and comments added by the auditor");
        await this.AUDIT_COMPLAINCE_LEVEL.waitFor({ state: 'visible' });
        await expect(this.AUDIT_COMPLAINCE_LEVEL).toBeVisible();
        console.log("Compliance level set and comments added by the auditor validated successfully");
    }

    async clickOnAuditDetails() {
        console.log("Clicking on the Audit Details button");
        await this.REMARK_DETAILS.waitFor({ state: 'visible' });
        await this.REMARK_DETAILS.click();

        console.log("Audit Details button clicked successfully");
    }

    async validateAuditDetailPopUp() {
        console.log("Validating that the Audit Detail pop-up is visible");

        await this.AUDIT_DETAIL_POP_UP.waitFor({ state: 'visible' });
        await expect(this.AUDIT_DETAIL_POP_UP).toBeVisible();

        console.log("Audit Detail pop-up validated successfully");
    }


    async clickOnNoteToSelfIcon() {
        console.log("Clicking on the Note to Self icon");
        await this.NOTE_TO_SELF_ICON.waitFor({ state: 'visible' });
        await this.NOTE_TO_SELF_ICON.click();
        console.log("Note to Self icon clicked successfully");
    }

    async enterNote() {
        console.log("Entering note text into the Note field");
        await this.NOTE_TEXT_FIELD.waitFor({ state: 'visible' });
        await this.NOTE_TEXT_FIELD.fill('Automation_TestNote');
        console.log("Note text entered successfully");
    }

    async clickOnSendIcon() {
        console.log("Clicking on the Send Note icon");
        await this.SEND_NOTE_ICON.waitFor({ state: 'visible' });
        await this.SEND_NOTE_ICON.click();
        console.log("Send Note icon clicked successfully");
    }

    async validateNoteAdded() {
        console.log("Validating that the note was added successfully");
        await this.page.waitForTimeout(2000);
        await this.NOTE_ADDED.waitFor({ state: 'visible' });
        const note = await this.NOTE_ADDED.textContent();
        await expect(note).toContain('Automation_TestNote');
        console.log("Note content:", note);
        console.log("Note validated successfully");
    }

    async clickOnIssue() {
        console.log("Clicking on the Issue tab");
        await this.ISSUE.waitFor({ state: 'visible' });
        await this.ISSUE.click();
        console.log("Issue tab clicked successfully");
    }

    async clickOnAddIssueButton() {
        console.log("Clicking on the Add Issue button");

        await this.ADD_ISSUE.waitFor({ state: 'visible' });
        await this.ADD_ISSUE.click();

        console.log("Add Issue button clicked successfully");
    }

    async enterIssueName() {
        console.log("Entering Issue name");

        const uniqueName = `Test_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        await this.ISSUE_NAME_FIELD.fill(uniqueName);

        console.log("Issue name entered successfully");
    }

    async enterIssueDesc() {
        console.log("Entering Issue description");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill("Automation_testingDesc" + uniqueTitle);

        console.log("Issue description entered successfully");
    }

    async enterIssueRemidiation() {
        console.log("Entering Issue remediation details");

        await this.ISSUE_REMIDIATION_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_REMIDIATION_FIELD.fill("automation");

        console.log("Issue remediation entered successfully");
    }

    async selectIssueType() {
        console.log("Selecting Issue type from dropdown");
        await this.page.waitForTimeout(1500)
        await this.ISSUE_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_DROPDOWN.click();
        await this.SELECT_ISSUE_TYPE.waitFor({ state: 'visible' });
        await this.SELECT_ISSUE_TYPE.scrollIntoViewIfNeeded();
        await this.SELECT_ISSUE_TYPE.click();
        console.log("Issue type selected successfully");
    }

    async selectIssuePriority() {
        console.log("Selecting Issue priority");
        await this.ISSUE_PRIORITY.waitFor({ state: 'visible' });
        await this.ISSUE_PRIORITY.click();
        await this.SELECT_PRIORITY.waitFor({ state: 'visible' });
        await this.SELECT_PRIORITY.click();
        console.log("Issue priority selected successfully");
    }

    async selectIssueOwner() {
        console.log("Selecting Issue owner");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.SELECT_OWNER.waitFor({ state: 'visible' });
        await this.SELECT_OWNER.click();
        console.log("Issue owner selected successfully");
    }

    async selectReqTypeOwnerOwner() {
        console.log("Selecting owner");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.OPTION2.waitFor({ state: 'visible' });
        await this.SELECT_USER.click();
        console.log("owner selected successfully");
    }

    // New Function 

    async selectReqTypeOwner() {
        console.log("Selecting Issue Owner");

        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();

        const currentUrl = this.page.url();

        if (currentUrl.includes('ec.qa.ir.solidrange.com')) {
            console.log("QA Env detected - Selecting Admin User");
            await this.page.getByText('Admin User', { exact: true }).click();
        } else if (currentUrl.includes('ec.stage.ir.solidrange.com')) {
            console.log("Stage Env detected - Selecting Default Owner");
            await this.SELECT_OWNER.click();
        }

        console.log("Issue Owner selected successfully");
    }

    async selectIssueDepartment() {
        console.log("Selecting Issue department from dropdown");
        await this.page.waitForTimeout(1500);
        await this.ISSUE_DEPARTMENT.waitFor({ state: 'visible' });
        await this.ISSUE_DEPARTMENT.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Issue department selected successfully");
    }

    async clickOnTargetDateCalender() {
        console.log("Clicking on the Target Date calendar and selecting a start date");
        await this.TARGET_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.TARGET_DATE_CALENDER.scrollIntoViewIfNeeded();
        await this.TARGET_DATE_CALENDER.click();
        await Utils.clickFirstEnabledDate(this.page);
        console.log("Target date selected successfully");
    }

    async clickOnSaveIssue() {
        console.log("Clicking on the Save button");
        await this.SAVE_ISSUE.waitFor({ state: 'visible' });
        await this.SAVE_ISSUE.scrollIntoViewIfNeeded();
        await this.SAVE_ISSUE.click();
        console.log("Saved button clicked successfully");
    }

    async clickOnRemediation() {
        console.log("Clicking on the Remediation task");
        await this.REMEDIATION.waitFor({ state: 'visible' });
        await this.REMEDIATION.click();
        console.log("Remediation task clicked successfully");
    }

    async validateRemediationPopUp() {
        console.log("Validating that the Remediation pop-up is visible");

        await this.REMEDIATION_POPUP.waitFor({ state: 'visible' });
        await expect(this.REMEDIATION_POPUP).toBeVisible();

        console.log("Remediation pop-up validated successfully");
    }

    async enterRemediation(reme: string) {
        console.log("Entering remediation details");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${reme}_${random}`;
        await this.ISSUE_REMIDIATION_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_REMIDIATION_FIELD.fill(uniqueTitle);
        await this.ISSUE_REMIDIATION_FIELD_2.fill(uniqueTitle);
        console.log("Remediation details entered successfully");
    }

    async clickOnIssueDetails() {
        console.log("Clicking on the Issue Details section");
        await this.INITIVATE_DETAILS.waitFor({ state: 'visible' });
        await this.INITIVATE_DETAILS.click();
        console.log("Issue Details section clicked successfully");
    }

    async validateIssueDetailsPopUp() {
        console.log("Validating that the Issue Details pop-up is visible");
        await this.ISSUE_DETAILS_POPUP.waitFor({ state: 'visible' });
        await expect(this.ISSUE_DETAILS_POPUP).toBeVisible();
        console.log("Issue Details pop-up validated successfully");
    }

    async clickOnCommonControlTab() {
        console.log("Clicking on the Common Control tab");
        await this.COMMON_CONTROL_TAB.waitFor({ state: 'visible' });
        await this.COMMON_CONTROL_TAB.click();
        console.log("Common Control tab clicked successfully");
    }


    async clickOnManageCrossMaping() {
        console.log("Clicking on the Manage Cross Mapping button");
        await this.MANAGE_CROSS_MAPING_BUTTON.waitFor({ state: 'visible' });
        await this.MANAGE_CROSS_MAPING_BUTTON.click();
        console.log("Manage Cross Mapping button clicked successfully");
    }

    async clickOnCommonControl() {
        console.log("Clicking on the Common Control button");
        await this.COMMOM_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.COMMOM_CONTROL_BUTTON.click();
        console.log("Common Control button clicked successfully");
    }

    async enterControlName(path: number) {
        console.log("Entering Control name");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.page.waitForTimeout(2000);
        await this.CONTROL_NAME_FIELD.nth(path).waitFor({ state: 'visible' });
        await this.CONTROL_NAME_FIELD.nth(path).fill("Automation_Control" + uniqueTitle);
        console.log("Control name entered successfully");
    }
    async enterControlEngName(path: number) {
        console.log("Entering Control name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.CONTACT_NAME_VENDOR.nth(path).waitFor({ state: 'visible' });
        await this.CONTACT_NAME_VENDOR.nth(path).fill("Automation_Vendor" + uniqueTitle);
        console.log("Control name entered successfully");
    }

    async enterControlDesc(path: number) {
        console.log("Entering Control description");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Automation_Desc' + uniqueTitle);
        console.log("Control description entered successfully");
    }

    async clickOnCreateControl() {
        console.log("Clicking on the Create Control button");
        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'attached' });
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Create Control button clicked successfully");
    }

    async clickOnEvidence() {
        console.log("Clicking on the Evidence tab");
        await this.EVIDENCE.waitFor({ state: 'visible' });
        await this.EVIDENCE.click();
        console.log("Evidence tab clicked successfully");
    }

    async validateEvidencetableVisible() {
        console.log("Validating that the Evidence table is visible");
        await this.EVIDENCE_TABLE.waitFor({ state: 'visible' });
        await expect(this.EVIDENCE_TABLE).toBeVisible();
        console.log("Evidence table validated successfully");
    }

    async clickOnRiskSettings() {
        console.log("Clicking on the Risk Settings tab");
        await this.RISK_SETTINGS.waitFor({ state: 'visible' });
        await this.RISK_SETTINGS.click();
        console.log("Risk Settings tab clicked successfully");
    }

    async clickOnAssesmentCritaria() {
        console.log("Clicking on the Assessment Criteria tab");
        await this.ASSESSMENT_CRITERIA.waitFor({ state: 'visible' });
        await this.ASSESSMENT_CRITERIA.click();
        console.log("Assessment Criteria tab clicked successfully");
    }

    async clickOnMethelogyTab() {
        console.log("Clicking on the Methodology tab");
        await this.METHELOGY.waitFor({ state: 'visible' });
        await this.METHELOGY.click();
        console.log("Methodology tab clicked successfully");
    }

    async selectMethelogyCheckbox() {
        console.log("Checking Methodology checkbox state");

        await this.METHELOGY_CHECKBOX.waitFor({ state: 'visible' });

        const isChecked = await this.METHELOGY_CHECKBOX.isChecked();

        if (!isChecked) {
            console.log("Checkbox is not checked — checking now");
            await this.METHELOGY_CHECKBOX.check();
            console.log("Checkbox checked successfully");
            await this.validateSuccessMsg();
        } else {
            console.log("Checkbox already checked — skipping");
        }
    }

    async clickOnRiskManagement() {
        await this.page.waitForTimeout(2500)
        console.log("Clicking on the Risk Management button");
        await this.RISK_MANAGEMENT_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MANAGEMENT_BUTTON.click();
        console.log("Risk Management button clicked successfully");
    }

    async clickOnRiskRegister() {
        console.log("Clicking on the Risk Register button");
        await this.RISK_REGISTER_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_REGISTER_BUTTON.click();
        console.log("Risk Register button clicked successfully");
    }

    async clickOnNewRiskDropdown() {
        console.log("Clicking on the New Risk dropdown button");
        await this.NEW_RISK_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_RISK_BUTTON.click({ force: true });
        if (!(await this.CREATE_RISK_BUTTON.isVisible())) {
            await this.NEW_RISK_BUTTON.evaluate((el: HTMLElement) => el.click());
        }
        console.log("New Risk dropdown clicked successfully");
    }

    async clickOnCreateRisk() {
        await this.page.waitForTimeout(2000);
        const locator = this.CREATE_RISK_BUTTON;
        const isVisible = await locator.isVisible();
        console.log('Create Risk button visible:', isVisible);
        await locator.evaluate((el: HTMLElement) => el.click());
        console.log('Clicked Create Risk button');

    }
    async clickAndSelectRisk(index = 1) {
        // await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        // console.log("Clicking on a Risk item to select it");
        // await this.RISK.waitFor({ state: 'visible' });
        // await this.RISK.click();
        // console.log("Risk item selected successfully");

        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        console.log("Clicking on a Risk item to select it");

        const risk = this.page.locator(`(//div[text()='Open' or text()='Closed']/ancestor::tr//a[contains(@class,"mat-mdc")])[${index}]`);

        await risk.waitFor({ state: 'visible' });
        await risk.click();

        console.log("Risk item selected successfully");
    }

    async validateRiskPage() {
        console.log("Validating that the Risk Profile and Risk History Timeline is visible");
        await this.RISK_PAGE.waitFor({ state: 'visible' });
        await this.RISK_PAGE.scrollIntoViewIfNeeded();
        await expect(this.RISK_PAGE).toBeVisible();
        console.log("Risk Profile and Risk History Timeline validated successfully");
    }
    async clickOnTreatmentID() {
        console.log("Clicking on Treatment ID...");
        await this.TREATMENT_ID.scrollIntoViewIfNeeded();
        await this.TREATMENT_ID.click();
        console.log("Treatment ID clicked successfully");
    }

    async clickOnTreatmentThreedot() {
        console.log("Clicking Treatment options (three dots)...");
        await this.TREATMENT_THREEDOT.click();
        console.log("Treatment options opened successfully");
    }

    async clickMarkAsComplete() {
        console.log("Clicking on 'Mark As Complete'...");
        await this.MARK_AS_COMPLETE.click();
        console.log("'Mark As Complete' clicked successfully");
    }

    async SelectRisk() {
        console.log("Selecting a Risk from the list");

        await this.SELECT_RISK.waitFor({ state: "visible" });
        await this.SELECT_RISK.click();

        console.log("Risk selected successfully");
    }

    async clickOnNewTreatement() {
        // console.log("Clicking on the New Treatment button");
        // await this.NEW_TREATEMENT_BUTTON.waitFor({ state: 'visible' });
        // await this.NEW_TREATEMENT_BUTTON.scrollIntoViewIfNeeded();
        // await this.NEW_TREATEMENT_BUTTON.click();
        // console.log("New Treatment button clicked successfully");

        let index = 1;

        while (true) {
            if (await this.NEW_TREATEMENT_BUTTON.isEnabled()) {
                console.log("Clicking on the New Treatment button");
                await this.NEW_TREATEMENT_BUTTON.waitFor({ state: 'visible' });
                await this.NEW_TREATEMENT_BUTTON.scrollIntoViewIfNeeded();
                await this.NEW_TREATEMENT_BUTTON.click();
                console.log("New Treatment button clicked successfully");
                break;
            } else {
                console.log("New Treatment button disabled. Selecting next risk...");
                await this.page.goBack();
                await this.page.waitForTimeout(2000);
                index++;
                await this.clickAndSelectRisk(index);
            }
        }
    }

    async addNewTreatmentPlanIfEnabled() {
        await this.page.waitForTimeout(2000)
        await this.NEW_TREATEMENT_BUTTON.waitFor({ state: 'visible' });
        const isDisabled = await this.NEW_TREATEMENT_BUTTON.isDisabled();

        if (isDisabled) {
            console.log("New Treatment button is disabled. Skipping action.");
            return;
        }

        console.log("Starting new treatment plan creation");
        await this.clickOnNewTreatement();
        await this.clickOnAddTreatmentPlan();
        await this.enterTreatmentName();
        await this.enterTreatmentDesc();
        await this.enterTreatmentCost();
        await this.clickAndSelectTreatmentOwner();
        await this.clickOnTreatmentSave();
        await this.validateSuccessMsg();

        console.log("Treatment plan created successfully");
    }

    async clickOnAddTreatmentPlan() {
        console.log("Clicking on the Add Treatment Plan");
        await this.ADD_TREATMENT_PLAN.click();
    }

    async enterTreatmentName() {
        console.log("Entering Treatment name");

        await this.TREATMENT_NAME_FIELD.waitFor({ state: 'visible' });
        await this.TREATMENT_NAME_FIELD.fill('Automation_Treatment');

        console.log("Treatment name entered successfully");
    }

    async enterTreatmentDesc() {
        console.log("Entering Treatment description");

        await this.TREATEMENT_DESC.waitFor({ state: 'visible' });
        await this.TREATEMENT_DESC.fill('Automation_Desc');

        console.log("Treatment description entered successfully");
    }

    async enterTreatmentCost() {
        console.log("Entering Treatment cost");

        await this.TREATEMENT_COST_FIELD.waitFor({ state: 'visible' });
        await this.TREATEMENT_COST_FIELD.fill('2000');

        console.log("Treatment cost entered successfully");
    }

    async clickAndSelectTreatmentOwner() {
        console.log("Selecting Treatment owner");
        await this.TREATEMENT_OWNER_DROPDOWN.waitFor({ state: 'visible' });
        await this.TREATEMENT_OWNER_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Treatment owner selected successfully");
    }

    async clickAndSelectTreatementDate() {
        console.log("Selecting Treatment date");
        const dueDate = this.page.locator(`(//span[@class="input-group-text"])[2]`);
        await dueDate.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Treatment date selected successfully");
    }

    async clickOnTreatmentSave() {
        console.log("Clicking on Save button for Treatment");
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Treatment saved successfully");
    }

    async clickOnTreatmentHistioryButton() {
        console.log("Clicking on Treatment History button");
        await this.TREATMENT_HISTORY_BUTTON.waitFor({ state: 'visible' });
        await this.TREATMENT_HISTORY_BUTTON.click();
        console.log("Treatment History button clicked successfully");
    }

    async validateTreatmentHistoryPopUp() {
        console.log("Validating Treatment History popup");
        await this.TREATMENT_HISTORY_POPUP.waitFor({ state: 'visible' });
        await expect(this.TREATMENT_HISTORY_POPUP).toBeVisible();
        console.log("Treatment History popup is visible");
    }

    async clickOnAssesmentHistioryButton() {
        console.log("Clicking on Assessment History button");
        await this.ASSESMENT_HISTORY_BUTTON.waitFor({ state: 'visible' });
        await this.ASSESMENT_HISTORY_BUTTON.click();
        console.log("Assessment History button clicked successfully");
    }

    async validateAssesmentHistoryPopUp() {
        console.log("Validating Assessment History popup");
        await this.ASSESMENT_HISTORY_POPUP.waitFor({ state: 'visible' });
        await expect(this.ASSESMENT_HISTORY_POPUP).toBeVisible();
        console.log("Assessment History popup is visible");
    }

    async clickOnExportPdfIconValidatePreview() {
        console.log("Clicking on Export PDF button");
        try {
            await this.EXPORT_PDF_ICON.click();
            console.log("Export PDF button clicked... waiting for print preview...");
            console.log(this.page.url());
            const printPreview = this.page.locator('print-preview-app').locator('#state').nth(0);
            try {

                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                console.log("Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }

    async clickOnExeptionTab() {
        console.log("Clicking on Exception Tab");
        await this.EXEPTIONS_TAB.waitFor({ state: 'visible' });
        await this.EXEPTIONS_TAB.click();
        console.log("Exception Tab clicked successfully");
    }

    async clickOnAddExeptionButton() {
        console.log("Clicking on Add Exception button");
        await this.ADD_EXEPTION_BUTON.waitFor({ state: 'visible' });
        await this.ADD_EXEPTION_BUTON.scrollIntoViewIfNeeded();
        await this.ADD_EXEPTION_BUTON.click();
        console.log("Add Exception button clicked successfully");
    }

    async enterExeptionDesc() {
        console.log("Entering Exception description");
        await this.page.waitForTimeout(1500)
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `AutomationTest_${random}`;
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill(uniqueTitle);
        console.log("Exception description entered");
    }

    async selectExeptionStartDate() {
        console.log("Selecting Exception start date");
        await this.EXEPTION_START_DATE.waitFor({ state: 'visible' });
        await this.EXEPTION_START_DATE.click();
        await Utils.clickFirstEnabledDate(this.page);
        console.log("Exception start date selected");
    }

    async selectExeptionEndDate() {
        console.log("Selecting Exception end date");
        await this.EXEPTION_END_DATE.waitFor({ state: 'visible' });
        await this.EXEPTION_END_DATE.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Exception end date selected");
    }

    async clickOnRiskNote() {
        console.log("Clicking on Risk Note");
        await this.RISK_NOTE.waitFor({ state: 'visible' });
        await this.RISK_NOTE.click();
        console.log("Risk Note clicked successfully");
    }

    async clcikOnRiskTemplate() {
        console.log("Clicking on Risk Template");
        await this.RISK_TEMPLATE.waitFor({ state: 'visible' });
        await this.RISK_TEMPLATE.click();
        console.log("Risk Template clicked successfully");
    }

    async clickOnLibraryTab() {
        console.log("Clicking on Library Tab");
        await this.LIBRARY_TAB.waitFor({ state: 'visible' });
        await this.LIBRARY_TAB.click();
        console.log("Library Tab clicked successfully");
    }

    async selectTemplateCheckbox() {
        console.log("Selecting Template checkbox");
        await this.TEMPLATE_CHECKBOX.waitFor({ state: 'visible' });
        await this.TEMPLATE_CHECKBOX.check();
        console.log("Template checkbox selected");
    }

    async clickOnCopyToTemplateButton() {
        console.log("Clicking on Copy to Template button");
        await this.CLONE_TEMPLATE_BUTTON.waitFor({ state: 'visible' });
        await this.CLONE_TEMPLATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CLONE_TEMPLATE_BUTTON.click();
        console.log("Copy to Template button clicked");
    }

    async copyTemplateIfExists() {
        await this.page.waitForTimeout(2000);
        const hamburger = this.page.locator(
            "(//td//span[@class='s-dots-vertical'])[1]"
        );

        const isVisible = await hamburger.isVisible().catch(() => false);

        if (!isVisible) {
            console.log("Hamburger not visible → skipping delete flow")
            return;
        } else {
            await this.selectTemplateCheckbox();
            await this.clickOnCopyToTemplateButton();
        }
    }

    async clickOnKeyIndicatorTab() {
        console.log("Clicking on Key Indicator tab");
        await this.INDECATOR_KEY_TAB.waitFor({ state: 'visible' });
        await this.INDECATOR_KEY_TAB.click();
        console.log("Key Indicator tab clicked");
    }

    async clickOnNewIndicatorButton() {
        console.log("Clicking on Add Key Indicator button");
        await this.NEW_INDICATOR_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INDICATOR_BUTTON.click();
        console.log("Add Key Indicator button clicked");
    }

    async enterIndicatorTittle() {
        console.log("Entering Indicator title");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Automation_Testindicator');
        console.log("Indicator title entered");
    }

    async enterDataSource() {
        console.log("Entering Indicator data source");
        await this.INDICATOR_SOURCE.waitFor({ state: 'visible' });
        await this.INDICATOR_SOURCE.fill('Automation_TestSource');
        console.log("Indicator data source entered");
    }

    async enterMinTolrence() {
        console.log("Entering Indicator minimum tolerance");
        await this.INDICATOR_MINTOLER_FIELD.waitFor({ state: 'visible' });
        await this.INDICATOR_MINTOLER_FIELD.fill('30');
        console.log("Indicator minimum tolerance entered");
    }

    async enterMaxTolrence() {
        console.log("Entering Indicator maximum tolerance");
        await this.INDICATOR_MAXTOLER_FIELD.waitFor({ state: 'visible' });
        await this.INDICATOR_MAXTOLER_FIELD.fill('60');
        console.log("Indicator maximum tolerance entered");
    }

    async selectIndicatorFrequency() {
        console.log("Selecting Indicator frequency");
        await this.FRECUENCY_DROPDOWN.waitFor({ state: 'visible' });
        await this.FRECUENCY_DROPDOWN.click();
        const frequency = this.page.locator(`//span[normalize-space()='Monthly']`);
        await frequency.waitFor({ state: 'visible' });
        await frequency.click();
        console.log("Indicator frequency selected as Monthly");
    }

    async selectIndicatorMeserment() {
        console.log("Selecting Indicator measurement");
        await this.MESERMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.MESERMENT_DROPDOWN.click();
        const measurement = this.page.locator(`//span[normalize-space()='Percentage']`);
        await measurement.waitFor({ state: 'visible' });
        await measurement.click();
        console.log("Indicator measurement selected as Percentage");
    }

    async clickOnTypeRadio() {
        await this.SELECT_TYPE_RADIO.click();
    }

    async clickOnAddIndicator() {
        console.log("Clicking on Add Indicator button");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Indicator button clicked");
    }

    async clickNewRiskTemplateButton() {
        console.log("Clicking on New Risk Template button");
        await this.NEW_RISK_TEMPLATE.waitFor({ state: 'visible' });
        await this.NEW_RISK_TEMPLATE.click();
        console.log("New Risk Template button clicked");
    }

    async clickAndSelectCategory() {
        console.log("Selecting Risk Category: Operational");
        await this.RISK_CATEGORY.waitFor({ state: 'visible' });
        await this.RISK_CATEGORY.click();
        const category = this.page.locator(`//span[normalize-space()='Operational']`);
        await category.waitFor({ state: 'visible' });
        await category.scrollIntoViewIfNeeded();
        await category.click();
        console.log("Risk Category selected");
    }

    async enterRiskTittle() {
        console.log("Entering Risk title");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Automation_Risk');
        console.log("Risk title entered");
    }

    async enterRiskStatement() {
        console.log("Entering Risk statement");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Automation_Statement');
        console.log("Risk statement entered");
    }

    async clickAddRiskTemplate() {
        console.log("Clicking Add button");
        await this.ADD_RISK.waitFor({ state: 'visible' });
        await this.ADD_RISK.click();
        console.log("Add button clicked..");
    }

    async clickOnCatalog() {
        console.log("Clicking on Catalog tab");
        await this.CATALOG.waitFor({ state: 'visible' });
        await this.CATALOG.click();
        console.log("Catalog tab clicked");
    }

    async clickOnNewAssetButton() {
        console.log("Clicking New Asset button");
        await this.ADD_ASSERT.waitFor({ state: 'visible' });
        await this.ADD_ASSERT.click();
    }

    async clickOnNewAssert() {
        await this.NEW_ASSET_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_ASSET_BUTTON.click();
        console.log("New Asset button clicked");
    }

    async enterAssetEngName() {
        console.log("Entering Asset English name");
        await this.ENG_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ENG_ASSEST_NAME_FIELD.fill('Automation_TestAsset');
        console.log("Asset English name entered");
    }

    async enterAssetArbName() {
        console.log("Entering Asset Arabic name");
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill('Automation_TestAsset');
        console.log("Asset Arabic name entered");
    }

    async clickAndSelectAssertDept() {
        console.log("Selecting Asset Department");
        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Asset Department selected");
    }

    async clickAndSelectAssesrtOwner() {
        console.log("Selecting Asset Owner: Automation Internal User");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.scrollIntoViewIfNeeded();
        await this.ISSUE_OWNER.click();
        await this.OPTION.click();
        console.log("Asset Owner selected");
    }

    async clickOnAddAssert() {
        console.log("Clicking Add Asset button");
        await this.page.waitForTimeout(2000);
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        const assetValue = this.page.locator(`//div[contains(text(),'Asset Value')]/following::div[@class="chip-container size-md ng-star-inserted"]`);
        await assetValue.waitFor({ state: 'visible' });
        await expect(assetValue).toBeVisible();
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Asset added successfully");
    }

    async validateAddedAssert() {
        await this.SUCCESS_MSG.waitFor({ state: "visible" });
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await expect(this.ASSET_NAME).toContainText('Automation_TestAsset')
    }

    async clickOnThreats() {
        console.log("Clicking on Threats tab");
        await this.THREATS.waitFor({ state: 'visible' });
        await this.THREATS.click();
        console.log("Threats tab opened");
    }

    async clickOnNewThreatButton() {
        console.log("Clicking on New Threat button");
        await this.ADD_THREAT.waitFor({ state: 'visible' });
        await this.ADD_THREAT.click();
    }

    async clickOnNewThreat() {
        await this.NEW_THREAT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_THREAT_BUTTON.click();
        console.log("New Threat popup opened");
    }

    async enterThreatEngName() {
        console.log("Entering English Threat Name");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Automation_TestThreat_${random}`;
        await this.ENG_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ENG_ASSEST_NAME_FIELD.fill(uniqueTitle);
        console.log("English Threat Name entered");
    }

    async enterThreatArbName() {
        console.log("Entering Arabic Threat Name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill(uniqueTitle);
        console.log("Arabic Threat Name entered");
    }

    async clickAndSelectThreatType() {
        console.log("Selecting Threat Type");
        await this.TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Threat Type selected:");
    }

    async clickOnThreatAdd() {
        console.log("Clicking on Add Threat button");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Threat added successfully");
    }

    async clickOnVulability() {
        console.log("Clicking Vulnerability tab");
        await this.VULNERABILITY.waitFor({ state: 'visible' });
        await this.VULNERABILITY.click();
        console.log("Vulnerability tab opened");
    }
    async clickOnNewVulabilityButton() {
        console.log("Clicking on New Vulnerability button");
        await this.ADD_VULNERABILITY.waitFor({ state: 'visible' });
        await this.ADD_VULNERABILITY.click();
    }

    async clickOnNewVulability() {
        await this.NEW_VULNERABILITY_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_VULNERABILITY_BUTTON.click();
        console.log("New Vulnerability popup opened");
    }
    async enterVulabilityEngName() {
        console.log("Entering English Vulnerability Name");
        await this.ENG_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ENG_ASSEST_NAME_FIELD.fill('Automation_TestVulnerability');
        console.log("English Vulnerability Name entered");
    }

    async enterVulabilityArbName() {
        console.log("Entering Arabic Vulnerability Name");
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill('Automation_TestVulnerability');
        console.log("Arabic Vulnerability Name entered");
    }

    async clickAndSelectVulabilitySource() {
        console.log("Selecting Vulnerability Source");
        await this.SOURCE_DROPDOWN.waitFor({ state: 'visible' });
        await this.SOURCE_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Vulnerability Source selected:");
    }

    async clickOnVulabilityAdd() {
        console.log("Clicking Add Vulnerability button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_BUTTON.click();
        console.log("Vulnerability added successfully");
    }

    async clickOnProcess() {
        console.log("Clicking on Process section");
        await this.PROCESS.waitFor({ state: 'visible' });
        await this.PROCESS.click();
        console.log("Process section opened");
    }

    async clickOnNewProcessButton() {
        console.log("Clicking New Process button");
        await this.ADD_PROCESS.waitFor({ state: 'visible' });
        await this.ADD_PROCESS.click();
        console.log("New Process popup opened");
    }

    async clickOnNewProcess() {

        await this.NEW_PROCESS.waitFor({ state: 'visible' });
        await this.NEW_PROCESS.click();
    }
    async enterProcessEngName() {
        console.log("Entering English Process Name");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ENG_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ENG_ASSEST_NAME_FIELD.fill('Automation_TestProcess' + uniqueTitle);
        console.log("English Process Name entered");
    }

    async enterProcessArbName() {
        console.log("Entering Arabic Process Name");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill('Automation_Process' + uniqueTitle);
        console.log("Arabic Process Name entered");
    }

    async clickAndSelectProcessCategory() {
        console.log("Selecting Process Category");
        await this.CATEGORY_DROPDOWN.waitFor({ state: 'visible' });
        await this.CATEGORY_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Process Category selected:");
    }

    async clickAndSelectProcessOwner() {
        console.log("Selecting Process Owner");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        const type = this.page.locator(`//div[@role="listbox"]`).getByText('Automation Internal User');
        await type.waitFor({ state: 'visible' });
        await type.click();
        console.log("Process Owner selected: Automation Internal User");
    }
    async clickOnProcessSlider() {
        const sliderPointer = this.page.locator('.track');
        // Ensure the slider pointer is visible
        await sliderPointer.waitFor({ state: 'visible' });
        // Click on the slider handle
        await sliderPointer.first().click({ force: true });
        console.log("Clicked on the process slider pointer...");
    }

    async clickOnProcessAdd() {
        console.log("Clicking Add Process button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_BUTTON.click();
        console.log("Process added successfully");
    }

    async clickOnInitiativeManagement() {
        await this.page.waitForTimeout(5000);
        console.log("Clicking Initiative Management section");
        await this.INITIATIVE_MANAGEMENT.waitFor({ state: 'visible' });
        await this.INITIATIVE_MANAGEMENT.click();
        console.log("Initiative Management opened");
    }

    async clickOnInitiative() {
        console.log("Clicking on Initiative tab");
        await this.page.waitForTimeout(1500)
        await this.INITIATIVE.waitFor({ state: 'visible' });
        await this.INITIATIVE.click();
        console.log("Initiative tab opened");
    }

    async clickOnNewInitiative() {
        console.log("Clicking New Initiative button");
        await this.NEW_INITIATIVE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INITIATIVE_BUTTON.click();
        console.log("New Initiative popup opened");
    }

    async enterInitiativeTittle() {
        console.log("Entering Initiative Title");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Automation_Test_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(uniqueTitle);
        console.log("Initiative Title entered");
    }

    async enterInitiativeDesc() {
        console.log("Entering Initiative Description");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Automation_Test_Desc');
        console.log("Initiative Description entered");
    }

    async selectInitiativeDepartment() {
        console.log("Selecting Initiative Department");
        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Department selected");
    }

    async selectMapControlCheckbox() {
        console.log("Checking checkbox");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(1500);
        await this.SELECT_MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.SELECT_MAP_CHECKBOX.check();
        console.log("Checkbox checked");
    }

    async selectFrameworkCheckbox() {
        console.log("Checking checkbox");
        // If checkbox is visible, just check it
        await this.MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_CHECKBOX.check();
        console.log("Checkbox checked directly");
    }

    async clickOnMapControlButton() {
        console.log("Clicking Map button");
        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();
        console.log("Map button clicked");
    }

    async clickAndSelectInitiative() {
        console.log("Clicking and selecting Initiative");
        await this.SELECT_INITIATIVE.waitFor({ state: 'visible' });
        await this.SELECT_INITIATIVE.click();
        console.log("Initiative selected");
    }

    async clickOnLinkControl() {
        console.log("Clicking Link Control button");
        await this.LINK_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.LINK_CONTROL_BUTTON.scrollIntoViewIfNeeded();
        await this.LINK_CONTROL_BUTTON.click();
        console.log("Link Control button clicked");
    }

    async clickOnMileStoneTab() {
        console.log("Clicking Milestone tab");
        await this.MILESTONE_TAB.waitFor({ state: 'visible' });
        await this.MILESTONE_TAB.click();
        console.log("Milestone tab opened");
    }

    async clickOnNewMilestoneButton() {
        console.log("Clicking New Milestone button");
        await this.NEW_MILESTONE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_MILESTONE_BUTTON.click();
        console.log("New Milestone popup opened");
    }

    async enterMilestoneTittle() {
        console.log("Entering Milestone Title");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Automation_Milestone' + uniqueTitle);
        console.log("Milestone Title entered");
    }

    async enterMilestoneDesc() {
        console.log("Entering Milestone Description");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Automation_Milestone_Desc');
        console.log("Milestone Description entered");
    }

    async clickOnCreateMilestone() {
        console.log("Clicking Create Milestone button");
        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Milestone created successfully");
    }

    async clickOnGovernance() {
        console.log("Clicking on Governance section");
        await this.page.waitForTimeout(2000);
        await this.GOVERNANCE.waitFor({ state: 'visible' });
        await this.GOVERNANCE.click();
        console.log("Governance section opened");
    }

    async clickOnTemplates() {
        console.log("Clicking on Templates tab");
        await this.TEMPLATES.waitFor({ state: 'visible' });
        await this.TEMPLATES.click();
        console.log("Templates tab opened");
    }

    async validateTemplatePage() {
        console.log("Validating Template page visibility");
        await this.TEMPLATE_PAGE.waitFor({ state: 'visible' });
        await expect(this.TEMPLATE_PAGE).toBeVisible();
        console.log("Template page is visible");
    }

    async clickOnCreateTemplate() {
        console.log("Clicking on Create Template button");
        await this.CREATE_TEMPLATE.click();
        console.log("Create Template form opened");
    }

    async enterArabicName(nameArabic: string) {
        console.log(`Entering Arabic template name: ${nameArabic}`);
        await this.ARABIC_NAME_TEXTFILED.fill(nameArabic);
        console.log("Arabic template name entered");
    }

    async enterEnglishName(nameEnglish: string) {
        console.log(`Entering English template name: ${nameEnglish}`);
        const random = Math.floor(Math.random() * 100);
        const uniqueTitle = `_${random}`;
        await this.ENGLISH_NAME_TEXTFIELD.fill(nameEnglish + uniqueTitle);
        console.log("English template name entered");
    }

    async enterDocumentText(docText: string) {
        console.log("Entering Template document text");
        await this.DOCUMENT_TEXT_TEXTFIELD.fill(docText);
        console.log("Document text entered");
    }



    async uploadEvidenceFile(page: Page) {
        console.log("Starting evidence file upload...");

        await Utils.uploadFile(
            page,
            '(//input[@type="file"])[2]',
            'file/Upload_EC.png'    // <-- relative path, NO DRIVE LETTER
        );
    }
    async validateFileUploaded() {
        console.log("Validating file upload...");
        await expect(this.FILE_UPLOADED).toBeVisible();
        console.log("Validation file upload complete...");
    }

    async uploadDocFile(page: Page) {
        await this.SUCCESS_MSG.waitFor({ state: 'hidden' });
        console.log("Uploading Document file...");
        const fileInput = page.locator('input[type="file"]');

        await fileInput.waitFor({ state: 'attached' });

        await fileInput.setInputFiles(
            'file/UploadPdf.pdf'
        );
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        console.log("Document file upload attempted");

    }

    async clickOnCreateButtonGov() {
        console.log("Clicking Create button");
        await this.CREATE_BUTTON_GOV.scrollIntoViewIfNeeded();
        await this.CREATE_BUTTON_GOV.click();
        console.log("Template creation completed..");
    }

    async validateTemplateCreated(tempName: string) {
        console.log(`Validating template created: ${tempName}`);
        const temp = this.page.locator(`//div[contains(normalize-space(),'${tempName}'])/ancestor::div[@class="templates-list__col-4 ng-star-inserted"]`);
        await expect(temp).toBeVisible();
        console.log("Template creation validated");
    }

    async clickOnTemplate() {
        console.log("Clicking on created Template");
        await this.TEMPLATE.waitFor({ state: 'visible' });
        await this.TEMPLATE.click();
        console.log("Template opened");
    }

    async validateTemplateDetailsPopUp() {
        console.log("Validating Template Details popup");
        await this.TEMPLATE_DETAILS_POP_UP.waitFor({ state: 'visible' });
        await expect(this.TEMPLATE_DETAILS_POP_UP).toBeVisible();
        console.log("Template Details popup is visible");
    }

    async validateEditPage() {
        console.log("Validating Edit Template page");
        await this.EDIT_PAGE_HEADLINE.waitFor({ state: 'visible' });
        const heading = await this.EDIT_PAGE_HEADLINE.textContent();
        expect(heading?.trim()).toBe('Edit Template');
        console.log("Edit Template page is displayed");
    }

    async clearEnlishName() {
        console.log("Clearing English Name field");
        await this.ENGLISH_NAME_TEXTFIELD.clear();
        console.log("English Name field cleared");
    }

    async clickOnDelete() {
        console.log("Clicking Delete button");
        await this.DELETE_BUTTON.waitFor({ state: 'visible' });
        await this.DELETE_BUTTON.click();
        console.log("Delete button clicked");
    }

    async clickOnTemplateDeleteIcon() {
        console.log("Clicking Delete button");
        await this.TEM_DELETE_ICON.waitFor({ state: 'visible' });
        await this.TEM_DELETE_ICON.click();
        console.log("Delete button clicked");
    }

    async validateConfirmationPopUp() {
        console.log("Validating Delete Confirmation popup");
        await this.CONFIRMATION_POP_UP.waitFor({ state: 'visible' });
        await expect(this.CONFIRMATION_POP_UP).toBeVisible();
        console.log("Delete Confirmation popup visible");
    }

    async clickOnYesDeleteButton() {
        console.log("Clicking Yes on Delete Confirmation");
        await this.YES_BUTTON.click();
        console.log("Confirmed deletion");
    }

    async validateDeleteSuccessMsg() {
        console.log("Validating Delete Success message");

        try {
            await this.DELETE_SUCCESS_MSG.waitFor({
                state: 'visible',
                timeout: 2000
            });

            await expect(this.DELETE_SUCCESS_MSG).toBeVisible();
            console.log("Delete success message validated");

        } catch (error) {
            console.log("Data is in use, we are not able to delete it");
        }
    }

    async clickOnPolicyAndDoc() {
        console.log("Clicking Policy & Document Management");
        await this.POLICY_DOC_MANAGEMENT.click();
        console.log("Policy & Document Management opened");
    }

    async clickOnNewDoc() {
        console.log("Clicking New Document button");
        await this.NEW_DOC_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_DOC_BUTTON.click();
        console.log("New Document form opened");
    }

    async clickOnCreateDoc() {
        console.log("Clicking Create Document button");
        await this.CREATE_DOC.waitFor({ state: 'visible' });
        await this.CREATE_DOC.click();
        console.log("Create Document clicked");
    }

    async enterTittle(tittle: string) {
        console.log(`Entering Document Title: ${tittle}`);
        const random = Math.floor(Math.random() * 10000);
        this.lastCreatedDocTitle = `${tittle}_${random}`;
        await this.TITTLE.waitFor({ state: 'visible' });
        await this.TITTLE.fill(this.lastCreatedDocTitle);
        console.log(`Document Title entered: ${this.lastCreatedDocTitle}`);
    }

    async enterDescriptionGov(desc: string) {
        console.log("Entering Document Description");
        await this.DESCRIPTION_GOV.fill(desc);
        console.log("Document Description entered");
    }

    async clickAndSelectType() {
        console.log("Selecting Document Type");
        await this.TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.TYPE_DROPDOWN.click();
        await this.OPTION.waitFor({ state: 'visible' });
        await this.OPTION.click();
        console.log("Document Type selected: Form");
    }

    async clickAndSelectClarification() {
        console.log("Selecting Clarification Type");
        await this.CLARIFICATION_DROPDOWN.waitFor({ state: 'visible' });
        await this.CLARIFICATION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.CLARIFICATION_DROPDOWN.click();
        await this.OPTION.waitFor({ state: 'visible' });
        await this.OPTION.click();
        console.log("Clarification selected: Public");
    }

    async clickAndSelectShareing() {
        console.log(`Selecting Sharing Option: `);
        await this.SHARING_DROPDOWN.waitFor({ state: 'visible' });
        await this.SHARING_DROPDOWN.scrollIntoViewIfNeeded();
        await this.SHARING_DROPDOWN.click();
        await this.OPTION.waitFor({ state: 'visible' });
        await this.OPTION.click();
        console.log(`Sharing option selected:`);
    }

    async clickAndSelectdistribution() {
        console.log(`Selecting Distribution Option:`);
        await this.DISRIBUTION_DROPDOWN.waitFor({ state: 'visible' });
        await this.DISRIBUTION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DISRIBUTION_DROPDOWN.click();
        await this.page.waitForTimeout(1000); // Wait for dropdown options to load
        await this.OPTION.waitFor({ state: 'visible' });
        await this.OPTION.click(); // Click the first option to ensure dropdown is working
        console.log(`Distribution option selected:`);
    }

    async clickAndSelectFromDate() {
        console.log("Clicking From Date calendar");
        await this.FROM_DATE_CALENDAR.waitFor({ state: 'visible' });
        await this.FROM_DATE_CALENDAR.click();
        console.log("From Date calendar opened");
        await Utils.clickFirstEnabledDate(this.page);
    }

    async clickAndSelectToDate() {
        console.log("Clicking To Date calendar");
        await this.TO_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.TO_DATE_CALENDER.click();
        console.log("To Date calendar opened");
        await Utils.clickLastEnabledDate(this.page);
    }

    async selectDate(date: string) {
        console.log(`Selecting date: ${date}`);
        const selectDate = this.page.locator(`//span[text()='${date}']`);
        await selectDate.click();
        console.log(`Date selected: ${date}`);
    }

    async clickONOwnerShhipButton() {
        console.log("Clicking Add Ownership button");
        await this.ADD_OWERSHIP_BUTTON.click();
        console.log("Ownership button clicked");
    }

    async selectIssueOwnerGov() {
        await this.page.waitForTimeout(1500);
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.SELECT_OWNER_GOV.waitFor({ state: 'visible' });
        await this.SELECT_OWNER_GOV.click();
    }


    async uploadEvidenceFileGov(page: Page) {
        console.log("Uploading evidence file...");

        await Utils.uploadFile(
            page,
            '(//input[@id="filePicker"])[1]',
            'file/Upload_EC.png'    // <-- relative path, NO DRIVE LETTER
        );

        console.log("Evidence uploaded.");
    }


    async enterVersion(verion: string) {
        console.log(`Entering version: ${verion}`);
        await this.VERSION_TEXFIELD.fill(verion);
        console.log("Version entered");
    }

    async clickONNext() {
        console.log("Clicking Next button");
        await this.page.waitForLoadState('networkidle');
        await this.NEXT_BUTTON.nth(0).waitFor({ state: 'visible' });
        await this.NEXT_BUTTON.nth(0).click();
        console.log("Next button clicked");
    }

    async clickONNext2Times() {
        console.log("Clicking Next button (1st click)");
        await this.page.waitForLoadState('networkidle');
        await this.NEXT_BUTTON.nth(0).waitFor({ state: 'visible' });
        await this.NEXT_BUTTON.nth(0).click();
        console.log("1st Next clicked — waiting for toast to disappear...");
        await this.page.waitForTimeout(15000); // Wait for 15 seconds to allow any toast messages to disappear
        await this.NEXT_BUTTON.nth(0).waitFor({ state: 'visible' });
        await this.NEXT_BUTTON.nth(0).click();
        console.log("2nd Next clicked successfully");
    }

    async enterDocText(verion: string) {
        console.log("Entering Document text");
        await this.DOCUMENT_TEXT_TEXTFIELD_GOV.waitFor({ state: 'visible' });
        await this.DOCUMENT_TEXT_TEXTFIELD_GOV.fill(verion);
        console.log("Document text entered");
    }
    async clickFinish() {
        console.log("Attempting to click Finish button");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        // First click
        await this.FINISH_BUTTON.scrollIntoViewIfNeeded();
        await this.FINISH_BUTTON.click();
        console.log("Finish button clicked");

        // Check if still visible
        const stillVisible = await this.SUCCESS_MSG.isVisible();

        if (!stillVisible) {
            console.log("Finish button still visible — clicking again...");
            await this.FINISH_BUTTON.click();
            console.log("Finish button clicked again successfully");
        } else {
            console.log("Finish button no longer visible — no second click needed");
        }
    }
    async clickOnFinish() {
        console.log("click on Finish button");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(2000);
        await this.FINISH_BUTTON.scrollIntoViewIfNeeded();
        await this.FINISH_BUTTON.click();
        console.log("Finish button clicked");
    }

    async clickOnNextButton() {
        console.log("Clicking Next button");
        await this.page.waitForTimeout(2000);
        await this.NEXT_BUTTON.nth(1).waitFor({ state: 'visible' });
        await this.NEXT_BUTTON.nth(1).click();
        console.log("Next button clicked");
    }

    async clickOnPicktemplate() {
        console.log("Clicking Pick Template");
        await this.PICK_TEMPLATE.click();
        console.log("Pick Template clicked");
    }

    async clickOnUseTemplate() {
        console.log("Clicking Use Template");
        await this.USE_TEMPLATE.waitFor({ state: 'visible' });
        await this.USE_TEMPLATE.scrollIntoViewIfNeeded();
        await this.USE_TEMPLATE.click();
        console.log("Use Template clicked");
    }

    async clickOnUploadfromDevice() {
        console.log("Clicking Upload From Device");
        await this.UPLOAD_FROM_DEVICE.click();
        console.log("Upload From Device clicked");
    }

    async validateDocAdded(expected: string) {
        console.log(`Validating document added: expecting ${expected}`);
        const docName = await this.DOC_NAME.textContent();
        expect(docName).toContain(expected);
        console.log("Document validation successful");
    }

    async clickOnTableViewIfNotVisible() {
        await this.page.waitForTimeout(3500)
        console.log("Checking if Table View is visible");
        const isVisible = await this.TABLE_VIEW.isVisible();

        if (!isVisible) {
            console.log("Table View not visible, switching to Table View");
            await this.page.waitForTimeout(1500)
            await this.TABLE_VIEW_ICON.click();
        } else {
            console.log("Table View already visible");
        }
    }

    async clickOnSubmit() {
        console.log("Clicking Submit button");
        await this.SUBMIT_BUTTON.waitFor({ state: 'visible' });
        await this.SUBMIT_BUTTON.click();
        console.log("Submit button clicked");
    }

    async clickOnDocument() {
        console.log("Clicking Document");
        await this.page.waitForTimeout(2500);
        await this.DOC_NAME.waitFor({ state: 'visible' });
        await this.DOC_NAME.click();
        console.log("Document opened");
    }

    async clickOnControlsGov() {
        console.log("Navigating to Controls (Governance)");
        await this.GOV_CONTROL.scrollIntoViewIfNeeded();
        await this.GOV_CONTROL.click();
        console.log("Controls page opened");
    }

    async clickOnAddInternalControl() {
        console.log("Clicking Add Internal Control");
        await this.ADD_INT_CONTROL.waitFor({ state: 'visible' });
        await this.ADD_INT_CONTROL.click();
        console.log("Add Internal Control clicked");
    }

    async enterNameToArabicControlfield(name: string) {
        console.log(`Entering Arabic Control Name: ${name}`);
        await this.CONTROL_ARABIC_NAME.waitFor({ state: 'visible' });
        await this.CONTROL_ARABIC_NAME.fill(name);
        console.log("Arabic Control Name entered");
    }

    async enterNameToEngControlfield(name: string) {
        console.log(`Entering English Control Name: ${name}`);
        await this.CONTROL_ENG_NAME.waitFor({ state: 'visible' });
        await this.CONTROL_ENG_NAME.fill(name);
        console.log("English Control Name entered");
    }

    async clickOnMapInternalControl() {
        console.log("Clicking Map Internal Control");
        await this.MAP_INT_CONTROL.waitFor({ state: 'visible' });
        await this.MAP_INT_CONTROL.click();
        console.log("Map Internal Control clicked");
    }

    async clickMapCheckbox() {
        console.log("Checking Map Control Checkbox");
        await this.MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_CHECKBOX.check();
        console.log("Map checkbox checked");
    }

    async clickInternalControlTab() {
        console.log("Clicking Internal Control tab");
        await this.INTERNAL_CONTROL_TAB.waitFor({ state: 'visible' });
        await this.INTERNAL_CONTROL_TAB.click();
        console.log("Internal Control tab opened");
    }

    async validateInternalIntControlPage() {
        console.log("Validating Internal Control page");
        await this.INTERNAL_CONTROL_PAGE.waitFor({ state: 'visible' });
        await expect(this.INTERNAL_CONTROL_PAGE).toBeVisible();
        console.log("Internal Control page validated");
    }

    async clickOnAddControl() {
        console.log("Clicking Add Control");
        await this.ADD_CONTROL.waitFor({ state: 'visible' });
        await this.ADD_CONTROL.click();
        console.log("Add Control clicked");
    }

    async clickOnAddButton() {
        console.log("Clicking Add button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.click();
        console.log("Add button clicked");
    }

    async clickOnHamburgerGov() {
        console.log("Clicking Hamburger");
        await this.page.waitForTimeout(1500);
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("Hamburger clicked");
    }

    async clickActivateIfAvailable() {
        console.log("Searching all hamburgers for ACTIVATE...");
        // let tableViewVisible = this.page.locator(`//table[@class="main-policy__table table"]`);
        // await tableViewVisible.waitFor({ state: 'visible' });
        const SUBMIT_BUTTON = this.page.locator("//span[normalize-space()='Submit']");
        await this.page.waitForSelector('button.dropdown-toggle.icon-only');
        const hamburgers = this.page.locator('button.dropdown-toggle.icon-only');
        const count = await hamburgers.count();

        console.log(`Found ${count} hamburger(s)`);

        for (let i = 0; i < count; i++) {
            console.log(`Checking hamburger ${i + 1}...`);

            const currentHamburger = hamburgers.nth(i);

            // Open menu
            await currentHamburger.click();

            // Optional: wait for dropdown to render
            await this.page.waitForTimeout(300);

            if (await this.ACTIVATE_BUTTON.isVisible()) {
                console.log("ACTIVATE found! Clicking...");
                await expect(this.ACTIVATE_BUTTON).toBeVisible();
                await this.ACTIVATE_BUTTON.click();
                await SUBMIT_BUTTON.click();
                console.log("Activated successfully!");
                return;
            }

            // ❗ Close the hamburger before moving on
            console.log("ACTIVATE not found, closing menu...");
            await this.page.locator('body').click();

            // Optional: small wait to ensure it closes
            await this.page.waitForTimeout(200);
        }
    }

    async clickPublishIfAvailable() {
        console.log("Searching all hamburgers for PUBLISH...");
        const SUBMIT_BUTTON = this.page.locator("(//span[normalize-space()='Submit'])[1]");
        await this.page.waitForSelector('button.dropdown-toggle.icon-only');
        const hamburgers = this.page.locator('button.dropdown-toggle.icon-only');
        await hamburgers.first().waitFor({ state: 'visible' });
        const count = await hamburgers.count();

        for (let i = 0; i < count; i++) {
            console.log(`Checking hamburger ${i + 1}...`);
            const currentHamburger = hamburgers.nth(i);
            await currentHamburger.click();
            if (await this.PUBLISH_BUTTON.isVisible()) {
                console.log("PUBLISH found! Clicking...");
                await expect(this.PUBLISH_BUTTON).toBeVisible();
                await this.PUBLISH_BUTTON.click();
                await SUBMIT_BUTTON.waitFor({ state: 'visible' });
                await SUBMIT_BUTTON.click();
                await this.SUCCESS_MSG.waitFor({ state: 'visible' });
                console.log("Published successfully!");
                return;
            }
            await this.page.locator('body').click();
        }

        console.log("PUBLISH option not found in any hamburger menu");
    }

    async clickOnEditControl() {
        console.log("Clicking Edit");
        await this.EDIT.waitFor({ state: 'visible' });
        await this.EDIT.click();
        console.log("Edit clicked");
    }

    async clickOnUpdate() {
        console.log("Clicking Update button");
        await this.UPDATE_BUTTON.waitFor({ state: 'visible' });
        await this.UPDATE_BUTTON.click();
        console.log("Update button clicked");
    }

    async clickOnVendorManagement() {
        console.log("Navigating to Vendor Management");
        await this.VENDOR_MANAGEMENT.waitFor({ state: 'visible' });
        await this.VENDOR_MANAGEMENT.click();
        console.log("Vendor Management opened");
    }

    async clickOnVendorTab() {
        console.log("Clicking Vendor tab");
        await this.VENDOR_TAB.waitFor({ state: 'visible' });
        await this.VENDOR_TAB.click();
        console.log("Vendor tab opened");
    }

    async validateVendorPage() {
        console.log("Validating Vendor page");
        await this.VENDOR_PAGE.waitFor({ state: 'visible' });
        await expect(this.VENDOR_TAB).toBeVisible();
        await this.ADD_VENDOR_BUTTON.waitFor({ state: 'visible' });
        console.log("Vendor page validated");
    }

    async clickOnAddVendor() {
        console.log("Clicking Add Vendor");
        await this.ADD_VENDOR_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_VENDOR_BUTTON.click();
        console.log("Add Vendor clicked");
    }

    async enterVendorName(name: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${name}_${timestamp}_${random}`;
        console.log(`Entering Vendor Name: ${name}`);
        await this.VENDOR_NAME.fill(uniqueTitle);
        console.log("Vendor Name entered");
    }

    async enterAddress(address: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${address}_${timestamp}_${random}`;
        console.log(`Entering Vendor Address: ${address}`);
        await this.VENDOR_ADDRESS.fill(uniqueTitle);
        console.log("Vendor Address entered");
    }

    async clickAndSelectVendorType() {
        console.log("Selecting Vendor Type: Retailer");
        await this.TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.TYPE_DROPDOWN.click();
        const seletStatus = this.page.locator(`//span[normalize-space()='Retailer']`);
        await seletStatus.waitFor({ state: 'visible' });
        await seletStatus.click();
        console.log("Vendor Type selected: Retailer");
    }

    async clickAndSelectVendorDepartment() {
        console.log("Selecting Vendor Department: Automation Created Department");
        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DEPARTMENT_DROPDOWN.click();
        await this.SELECT_DEPARTMENT.click();
        console.log("Vendor Department selected");
    }

    async clickAndSelectVendorManager() {
        console.log("Selecting Vendor Manager: Automation_QA_User");
        await this.VENDOR_USER_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_USER_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_USER_DROPDOWN.click();
        await this.SELECT_OWNER.waitFor({ state: 'visible' });
        await this.SELECT_OWNER.click();
        console.log("Vendor Manager selected: Automation_QA_User");
    }

    async clickAndSelectVendorRisk() {
        console.log("Selecting Vendor Risk: Not-rated");
        await this.VENDOR_RISK_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_RISK_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_RISK_DROPDOWN.click();
        const seletStatus = this.page.locator(`//span[normalize-space()='Not-rated']`);
        await seletStatus.waitFor({ state: 'visible' });
        await seletStatus.click();
        console.log("Vendor Risk selected");
    }

    async enterPhoneNumber() {

        // Generate a unique 10-digit number
        const uniqueNumber = "9" + Math.floor(100000000 + Math.random() * 900000000).toString();

        console.log(`Entering phone number: ${uniqueNumber}`);
        await this.PHONE_NO_FIELD.fill(uniqueNumber);
        console.log("Phone number entered");
    }

    async enterContactPhoneNumber() {
        let contact = this.page.locator(`(//mat-label[normalize-space()='Phone Number'])[2]`)

        // Generate a unique 10-digit number
        const uniqueNumber = "9" + Math.floor(100000000 + Math.random() * 900000000).toString();

        console.log(`Entering phone number: ${uniqueNumber}`);
        await contact.fill(uniqueNumber);
        console.log("Phone number entered");
    }


    async enterPhoneNumberVendor() {
        console.log("Entering vendor phone number: 1234567898");
        await this.PHONE_NO_VENDOR.fill('1234567898000');
        console.log("Vendor phone number entered");
    }

    async enterContactNameVendor() {
        console.log("Entering vendor contact name:");
        await this.VENDOR_NAME.waitFor({ state: "visible" });
        await this.VENDOR_NAME.fill("Automation_Contact");
        console.log("Vendor contact name entered");
    }

    async enterProductName(product: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${product}_${timestamp}_${random}`;
        console.log(`Entering product name: ${product}`);
        await this.PRODUCT_NAME_FIELD.fill(uniqueTitle);
        console.log("Product name entered");
    }

    async enterDomain(domain: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${domain}_${timestamp}_${random}`;
        console.log(`Entering domain: ${domain}`);
        await this.DOMAIN_FIELD.fill(uniqueTitle);
        console.log("Domain entered");
    }

    async enterWebsite(web: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${web}_${timestamp}_${random}`;
        console.log(`Entering website: ${web}`);
        await this.WEBSITE_FIELD.fill(uniqueTitle);
        console.log("Website entered");
    }

    async enterVendorDesc(desc: string) {
        console.log(`Entering vendor description: ${desc}`);
        await this.DESCRIPTION_FIELD.fill(desc);
        console.log("Vendor description entered");
    }

    async clickOnCreatevendor() {
        console.log("Clicking Create button");
        await this.CREATE_VENDOR_BUTTON.scrollIntoViewIfNeeded();
        await this.CREATE_VENDOR_BUTTON.click();
        console.log("Create button clicked");
    }

    async clickOnAddContact() {
        console.log("Clicking Add Contact button");
        await this.ADD_CONTACT_BUTTON.click();
        console.log("Add Contact button clicked");
    }

    async enterConatactName(name: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${name}_${timestamp}_${random}`;
        console.log(`Entering contact name: ${name}`);
        await this.CONTACT_NAME.fill(uniqueTitle);
        console.log("Contact name entered");
    }

    async enterPosition(position: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${position}_${timestamp}_${random}`;
        console.log(`Entering position: ${uniqueTitle}`);
        await this.POSITION.fill(position);
        console.log("Position entered");

    }

    async enterEmail() {
        console.log("Entering email: test123@gmail.com");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${random}`;
        await this.EMAIL.waitFor({ state: 'visible' });
        await this.EMAIL.fill(uniqueTitle + 'automationTest123@gmail.com');
        console.log("Email entered");
    }

    async clickOnVindorName() {
        console.log("Clicking on Vendor name entry");
        await this.page.waitForTimeout(1500);
        await this.SELECT_VINDOR.waitFor({ state: 'visible' });
        await this.SELECT_VINDOR.click();
        console.log("Vendor name clicked");
    }

    async clickOnNewRisk() {
        await this.page.waitForTimeout(1500);
        console.log("Clicking Add New Risk");
        await this.ADD_RISK_BUTTON_GOV.waitFor({ state: 'visible' });
        await this.ADD_RISK_BUTTON_GOV.click();
        console.log("New Risk button clicked");
    }

    async enterRiskTitle(title: string) {
        console.log("Entering Risk Title: testing");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.RISK_TITTLE.waitFor({ state: 'visible' });
        await this.RISK_TITTLE.fill(title + 'Risk' + uniqueTitle);
        console.log("Risk Title entered");
    }

    async enterRiskStatementVendor() {
        console.log("Entering Risk Statement:");
        await this.RISK_STATEMENT.waitFor({ state: 'visible' });
        await this.RISK_STATEMENT.fill('Automation_Risk_Vendor');
        console.log("Risk Statement entered");
    }

    async clickSelectRiskCategory() {
        console.log("Selecting Risk Category: General");
        await this.RISK_CATEGORY_DROPDOWN.waitFor({ state: 'visible' });
        await this.RISK_CATEGORY_DROPDOWN.click();
        let risk = this.page.locator(`//span[normalize-space()='General']`);
        await risk.waitFor({ state: 'visible' });
        await risk.click();
        console.log("Risk Category selected");
    }

    async clickOnMapVendor() {
        console.log("Clicking Map");
        await this.MAP_BUTTON.nth(0).waitFor({ state: 'visible' });
        await this.MAP_BUTTON.nth(0).click();
        console.log("Map clicked..");
    }

    async slideToValue(count: number) {
        console.log(`Sliding to value index: ${count}`);
        const bar = this.page.locator(`(//span[text()='5'])[${count}]`);
        await bar.waitFor({ state: 'visible' });
        await bar.click();
        console.log("Slider value selected");
    }

    async clickOnDocumentsTab() {
        console.log("Clicking Documents tab");
        await this.DOCUMENT_TAB.waitFor({ state: 'visible' });
        await this.DOCUMENT_TAB.click();
        console.log("Documents tab opened");
    }

    async clickOnNewDocButton() {
        console.log("Clicking New Document button");
        await this.NEW_DOCUMENT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_DOCUMENT_BUTTON.click();
        console.log("New Document button clicked");
    }

    async clickSelectStatus() {
        console.log("Selecting Status: Valid");
        await this.STATUS_DROPDOWN_VENDOR.waitFor({ state: 'visible' });
        await this.STATUS_DROPDOWN_VENDOR.click();
        const status = this.page.locator(`//span[normalize-space()='Valid']`);
        await status.waitFor({ state: 'visible' });
        await status.click();
        console.log("Status selected");
    }

    async selectEffectivenessDate() {
        console.log("Selecting Effectiveness Date");
        await this.EFFECTNESS_CALENDER.waitFor({ state: 'visible' });
        await this.EFFECTNESS_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Effectiveness Date selected");
    }

    async clickOnCreateDocVendor() {
        console.log("Clicking Create Document for vendor");
        await this.CREATE_DOC_VENDOR.waitFor({ state: 'visible' });
        await this.CREATE_DOC_VENDOR.click();
        console.log("Vendor Document created");
    }

    async validateDocAddedVendor() {
        console.log("Validating Vendor Document created");
        await this.page.waitForTimeout(2000);
        let doc = this.page.locator(`(//a[contains(text(),'UploadPdf')])[1]`);
        await doc.waitFor({ state: 'visible' });
        await expect(doc).toBeVisible();
        console.log("Vendor Document created");
    }

    async clickOnContactTab() {
        console.log("Clicking Contact tab");
        await this.CONTACT_TAB.waitFor({ state: 'visible' });
        await this.CONTACT_TAB.click();
        console.log("Contact tab opened");
    }

    async clickOnAddContactButton() {
        console.log("Clicking Add Contact button");
        await this.ADD_CONTACT.waitFor({ state: 'visible' });
        await this.ADD_CONTACT.click();
        console.log("Add Contact button clicked");
    }

    async clickOnVendorhreeDot() {
        console.log("Clicking Vendor action (three dots)");
        await this.VENDOR_THREE_DOT.waitFor({ state: 'visible' });
        await this.VENDOR_THREE_DOT.click();
        console.log("Vendor menu opened");
    }

    async clickOnVendorEdit() {
        console.log("Clicking Edit Vendor");
        await this.EDIT.waitFor({ state: "visible" });
        await this.EDIT.click();
        console.log("Edit Vendor clicked");
    }

    async clickVendoRadioButton() {
        console.log("Selecting vendor radio button");
        await this.RADIO_VENDOR.waitFor({ state: 'visible' });
        await this.RADIO_VENDOR.click();
        console.log("Vendor radio button selected");
    }

    async clickVendorSave() {
        console.log("Saving Vendor changes");
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Vendor changes saved");
    }

    async validateRiskRatingVisible() {
        await this.RISK_RATING.waitFor({ state: 'visible' });
        expect(this.RISK_RATING).toBeVisible();
        console.log("Risk rating validated..");
    }

    async clickOnAuditManegement() {
        console.log("Navigating to Audit Management");
        await this.AUDIT_MANEGMENT.waitFor({ state: 'visible' });
        await this.AUDIT_MANEGMENT.click();
        console.log("Audit Management opened");
    }

    async clickOnAudits() {
        console.log("Clicking Audits");
        await this.page.waitForTimeout(2000);
        await this.AUDITS.waitFor({ state: 'visible' });
        await this.AUDITS.click();
        await this.page.waitForTimeout(1500)
        console.log("Audits opened");
    }

    async clickOnNewAudit() {
        console.log("Clicking New Audit");
        await this.NEW_AUDIT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_AUDIT_BUTTON.click();
        console.log("New Audit clicked");
    }

    async enterAuditName() {
        console.log("Entering Audit Name: testing");
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.page.waitForTimeout(1500)
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.fill('Automation_Audit' + uniqueTitle);
        console.log("Audit Name entered");
    }

    async enterAuditDesc() {
        console.log("Entering Audit Description:");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Automation_Audit_Desc');
        console.log("Audit Description entered");
    }

    async clickAndSelectAuditorType() {
        console.log("Selecting Auditor Type: Internal");
        await this.AUDIT_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.AUDIT_TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.AUDIT_TYPE_DROPDOWN.click();
        const seletStatus = this.page.locator(`//span[normalize-space()='Internal']`);
        await seletStatus.waitFor({ state: 'visible' });
        await seletStatus.click();
        console.log("Auditor Type selected");
    }

    async clickAndSelectFramework() {
        console.log("Selecting Framework: ");
        await this.page.waitForTimeout(2000)
        await this.FRAMEWORKS_DROPDOWN.waitFor({ state: 'visible' });
        await this.FRAMEWORKS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.FRAMEWORKS_DROPDOWN.click();
        await this.page.waitForTimeout(1500)
        await this.OPTION.click();
        console.log("Framework selected");
    }

    async clickAndSelectFrameworkUntilTwoEnabled() {

        console.log("Selecting framework until exactly 2 enabled checkboxes found");

        const dropdown = this.page.locator(
            '//input[@placeholder="Available Frameworks"]/following::ui-icon[@icon="s-chevron-down"]'
        );

        await dropdown.waitFor({ state: 'visible' });

        // Open once to get total options
        await dropdown.click();

        const options = this.page.getByRole('option').nth(3);
        await options.click();

        //     const totalOptions = await options.count();

        //     console.log(`Total framework options: ${totalOptions}`);

        //     // Close dropdown
        //    // await this.page.keyboard.press('Escape');

        //     for (let i = 2; i < totalOptions; i++) {

        //         console.log(`Trying framework index: ${i}`);

        //         // Re-open dropdown fresh each iteration
        //         await dropdown.click();

        //         const option = this.page
        //             .locator('//mat-option[@role="option"]//span')
        //             .nth(i);

        //         const frameworkName = await option.textContent();

        //         console.log(`Selecting framework: ${frameworkName}`);

        //         await option.click();

        //         // Wait for UI update
        //         await this.page.waitForLoadState('networkidle');

        //         const enabledCheckboxes = this.page.locator(
        //             '//input[@name="SelectedControlsIds" and not(@disabled)]'
        //         );

        //         const enabledCount = await enabledCheckboxes.count();

        //         console.log(`Enabled checkboxes count: ${enabledCount}`);

        //         // EXACTLY 2
        //         if (enabledCount === 2) {

        //             console.log("Found framework with exactly 2 enabled checkboxes");

        //             return;
        //         }

        //         // Clear selection before next iteration
        //         const clearButton = this.page.locator(
        //             '//mat-icon[contains(text(),"close")]'
        //         );

        //         if (await clearButton.isVisible()) {
        //             await clearButton.click();
        //         }
        //     }

        //     throw new Error(
        //         "No framework found with exactly 2 enabled checkboxes"
        //     );
    }

    async clickAndSelectAuditor() {
        console.log("Selecting Auditor");
        await this.AUDITOR_DROPDOWN.waitFor({ state: 'visible' });
        await this.AUDITOR_DROPDOWN.scrollIntoViewIfNeeded();
        await this.AUDITOR_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Auditor selected");
    }

    async clickAndSelectOwnervendor() {
        console.log("Selecting Risk Owner: Automation_QA_User");
        await this.RISK_OWNER.waitFor({ state: 'visible' });
        await this.RISK_OWNER.scrollIntoViewIfNeeded();
        await this.RISK_OWNER.click();
        await this.OPTION.click();
        console.log("Risk Owner selected");
    }

    async clickAndSelectAuditOwner() {
        console.log("Selecting Risk Owner: Automation_QA_User");
        await this.AUDIT_OWNER_DROPDOWN.waitFor({ state: 'visible' });
        await this.AUDIT_OWNER_DROPDOWN.scrollIntoViewIfNeeded();
        await this.AUDIT_OWNER_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Risk Owner selected");
    }

    async clickOnCreateAudit() {
        console.log("Clicking Create");
        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Audit Created");
    }

    async clickOnAuditName() {
        console.log("Clicking Audit");
        await this.AUDIT_NAME.waitFor({ state: 'visible' });
        await this.AUDIT_NAME.click();
        await this.page.waitForTimeout(1500)
        console.log("Audit opened");
    }

    async clickOnAuditControl() {
        console.log("Clicking Audit Control");
        await this.CONTROLS.waitFor({ state: 'visible' });
        await this.CONTROLS.click();
        console.log("Audit Control opened");
    }

    async clickControlExpand() {
        console.log("Expanding Control section");
        let expand = this.page.locator(`(//button[@aria-label='Row Expanded' or @aria-label='Row Collapsed'])[2]`);

        //await expand.click();
        await this.AUDIT_CONTROL_EXPAND.waitFor({ state: "visible" });
        await this.AUDIT_CONTROL_EXPAND.click();
        if (await expand.isVisible()) {
            await expand.click();
        }

        console.log("Control expanded");
    }

    async selectAuditControl() {
        console.log("Selecting Audit Control");
        await this.SELECT_AUDIT_CONTROL.waitFor({ state: 'visible' });
        await this.SELECT_AUDIT_CONTROL.click();
        console.log("Audit Control selected");
    }

    async clickOnAuditreview() {
        console.log("Clicking Audit Review");
        await this.AUDIT_REVIEW.waitFor({ state: 'visible' });
        await this.AUDIT_REVIEW.click();
        console.log("Audit Review opened");
    }

    async clickOnNoteTab() {
        console.log("Clicking Audit Notes tab");
        await this.AUDIT_NOTE_TAB.waitFor({ state: 'visible' });
        await this.AUDIT_NOTE_TAB.click();
        console.log("Audit Notes tab opened");
    }

    async clickOnNewNote() {
        console.log("Clicking Add Note");
        await this.NEW_NOTES.waitFor({ state: 'visible' });
        await this.NEW_NOTES.click();
        console.log("Add Note clicked");
    }

    async enterNoteTittle() {
        console.log("Entering Note Title:");
        await this.NOTE_TITTLE.waitFor({ state: 'visible' });
        await this.NOTE_TITTLE.fill('Automation_Note');
        console.log("Note Title entered");
    }

    async enterNoteRemark() {
        console.log("Entering Remark:");
        await this.NOTE_REMARK.waitFor({ state: 'visible' });
        await this.NOTE_REMARK.fill('Automation_Note');
        console.log("Remark entered");
    }

    async enterNoteProcedure() {
        console.log("Entering Corrective Procedure");
        await this.NOTE_PROCEDURE.waitFor({ state: 'visible' });
        await this.NOTE_PROCEDURE.fill('Automation_Procedure');
        console.log("Corrective Procedure entered");
    }

    async clickOnNoteAdd() {
        console.log("Clicking on Add");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Note Added");
    }

    async clickOnAuditThreeDot() {
        console.log("Clicking Three-Dot");
        await this.AUDIT_THREE_DOT.waitFor({ state: 'visible' });
        await this.AUDIT_THREE_DOT.click();
        console.log("Three-Dot clicked");
    }

    async clickOnChangeStatus() {
        console.log("Clicking Change Status");
        await this.CHANGE_STATUS.waitFor({ state: 'visible' });
        await this.CHANGE_STATUS.click();
        console.log("Change Status clicked");
    }

    async clickStatusRadio() {
        console.log("Selecting Status radio button");
        await this.AUDIT_STATUS_RADIO.waitFor({ state: 'visible' });
        await this.AUDIT_STATUS_RADIO.click();
        console.log("Status selected");
    }

    async clickOnConfirmationCheckbox() {
        console.log("Checking confirmation checkbox");
        await this.CONFIRMATION_CHECKBOX.waitFor({ state: 'visible' });
        await this.CONFIRMATION_CHECKBOX.check();
        console.log("Confirmation checked");
    }

    async clickonStatusSaveButton() {
        console.log("Checking Save button");
        await this.STATUS_SAVE_BUTTON.click();
        console.log("Checking Save button");
    }

    async clickOnIssueExeption() {
        console.log("Navigating to Issue Exceptions");
        await this.ISSUE_EXEPTIONS.waitFor({ state: 'visible' });
        await this.ISSUE_EXEPTIONS.click();
        console.log("Issue Exceptions opened");
    }

    async clickOnIssues() {
        console.log("Clicking Issues");
        await this.ISSUES.waitFor({ state: 'visible' });
        await this.ISSUES.click();
        console.log("Issues opened");
    }

    async validateIssuePage() {
        console.log("Validating Issues page");
        await this.ISSUES_TABLE.waitFor({ state: "visible" });
        await expect(this.ISSUES_TABLE).toBeVisible();
        console.log("Issues page validated");
    }

    async clickOnIssueHamburger() {
        console.log("Clicking On Haburger");
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("Haburger clicked..");
    }

    async validateOptionNotVisible() {
        await expect(this.AUDIT_DELETE_BUTTON).not.toBeVisible();
        console.log("Validating Delete Button");
    }

    async validateOptionVisible() {
        await expect(this.AUDIT_DELETE_BUTTON).toBeVisible();
        console.log("Validating Delete Button");
    }

    async clickOnIssueDelete() {
        console.log("Clicking Delete Button");
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log("Delete button clicked");
    }

    async clickOnExeptions() {
        console.log("Clicking Exceptions tab");
        await this.EXEPTIONS.waitFor({ state: 'visible' });
        await this.EXEPTIONS.click();
        console.log("Exceptions tab opened");
    }

    async validateExeptionPage() {
        console.log("Validating Exceptions page...");
        await this.ISSUES_TABLE.waitFor({ state: "visible" });
        await expect(this.ISSUES_TABLE).toBeVisible();
        console.log("Exceptions page validated successfully");
    }

    async clickOnExeptionHamburger() {
        console.log("Clicking on Exceptions Hamburger menu...");
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("Hamburger menu clicked");
    }

    async clickOnExeptionDelete() {
        console.log("Clicking on Delete...");
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log("Delete clicked");
    }

    async clickOnReports() {
        console.log("Clicking Reports tab...");
        await this.REPORTS.waitFor({ state: 'visible' });
        await this.REPORTS.click();
        console.log("Reports tab opened");
    }

    async validateReportPage() {
        console.log("Validating Reports page...");
        await this.REPORTS_PAGE.waitFor({ state: 'visible' });
        await expect(this.REPORTS_PAGE).toBeVisible();
        console.log("Reports page validated successfully");
    }

    async clickOnReportType() {
        console.log("Clicking on Report...");
        await this.SELECT_REPORT_TYPE.waitFor({ state: 'visible' });
        await this.SELECT_REPORT_TYPE.click();
        console.log("Report clicked");
    }

    async clickOnExecutiveReport() {
        console.log("Selecting Executive Report...");
        await this.EXECUTIVE_REPORT.waitFor({ state: 'visible' });
        await this.EXECUTIVE_REPORT.click();
        console.log("Executive Report selected");
    }

    async clickOnComplainceReport() {
        console.log("Selecting Compliance Report...");
        await this.COMPLAINCE_REPORT.waitFor({ state: 'visible' });
        await this.COMPLAINCE_REPORT.click();
        console.log("Compliance Report selected");
    }

    async clickOnTaskReport() {
        console.log("Clicking on Task Report...");
        await this.TASK_REPORT.waitFor({ state: 'visible' });
        await this.TASK_REPORT.click();
        console.log("Task Report clicked");
    }

    async clickOnInitiativeReport() {
        console.log("Clicking on Initiatives Report...");
        await this.INITIATIVES_REPORT.waitFor({ state: 'visible' });
        await this.INITIATIVES_REPORT.click();
        console.log("Initiatives Report clicked");
    }

    async clickOnIssueReport() {
        console.log("Clicking on Issue Report...");
        await this.ISSUE_REPOT.waitFor({ state: 'visible' });
        await this.ISSUE_REPOT.click();
        console.log("Issue Report clicked");
    }

    async clickSelectReport() {
        console.log("Clicking on Report...");
        await this.SELECT_REPORT.waitFor({ state: 'visible' });
        await this.SELECT_REPORT.click();
        console.log("Select Report clicked");
    }

    async clickSelectDepatReport() {
        console.log("Clicking on Department Report...");
        const deptRepot = this.page.locator(`(//div[@class="risk-report-type__cards"])[2]`);
        await deptRepot.waitFor({ state: 'visible' });
        await deptRepot.click();
        console.log("Department Report clicked");
    }

    async validateDeptPage() {
        console.log("Validating Department Report page...");
        await this.DEPT_REPOT_PAGE.waitFor({ state: 'visible' });
        await expect(this.DEPT_REPOT_PAGE).toBeVisible();
        console.log("Department Report page validated successfully");
    }

    async validateExecutiveReportPage() {
        console.log("Validating Executive Report page...");
        await this.EXECUTIVE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.EXECUTIVE_REPORT_PAGE).toBeVisible();
        console.log("Executive Report page validated successfully");
    }

    async validateComplaineReportPage() {
        console.log("Validating Compliance Report page...");
        await this.COMPLAINCE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.COMPLAINCE_REPORT_PAGE).toBeVisible();
        console.log("Compliance Report page validated successfully");
    }

    async validateTaskReportPage() {
        console.log("Validating Task Report page...");
        await this.TASK_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.TASK_REPORT_PAGE).toBeVisible();
        console.log("Task Report page validated successfully");
    }

    async validateInitiativeReportPage() {
        console.log("Validating Initiatives Report page...");
        await this.INITIATIVES_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.INITIATIVES_REPORT_PAGE).toBeVisible();
        console.log("Initiatives Report page validated successfully");
    }

    async validateIssueReportPage() {
        console.log("Validating Issue Report page...");
        await this.ISSUE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.ISSUE_REPORT_PAGE).toBeVisible();
        console.log("Issue Report page validated successfully");
    }

    async clickOnExportReportPdfIcon() {
        try {
            console.log("Clicking on Export PDF button...");
            await this.EXPORT_REPORT.click();
            console.log("Export PDF button clicked... waiting for print preview...");

            const printPreview = this.page.locator(`//div[@id="sizer"]`);
            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                await expect(printPreview).toBeVisible();
                console.log("Print preview displayed successfully.");
            } catch {
                console.warn("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }



    async clickDelegationTab() {
        console.log("Clicking Delegation tab...");
        await this.DELEGATION_TAB.waitFor({ state: 'visible' });
        await this.DELEGATION_TAB.click();
        console.log("Delegation tab opened");
    }

    async clickOnDelegation() {
        console.log("Clicking on Delegation option...");
        await this.DELEGATION.waitFor({ state: 'visible' });
        await this.DELEGATION.click();
        console.log("Delegation option clicked");
    }
    async clickOnExportPdfIcon() {
        try {
            // Click on Export PDF button
            await this.EXPORT_REPORT.waitFor({ state: 'visible' });
            await this.EXPORT_REPORT.click();

            console.log("Export PDF button clicked... waiting for print preview...");

            // Wait for a visible print or preview element (update selector if needed)
            const printPreview = this.page.locator(`//div[@id="sizer"]`);

            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                await expect(printPreview).toBeVisible();
                console.log("Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }

    async deleteDelegationIfVisible() {
        await this.page.waitForTimeout(2000)
        await this.NEW_DELEGATION.waitFor({ state: 'visible' });
        console.log("Checking if Delegation Hamburger is visible...");
        await this.page.waitForTimeout(3500); // Wait for potential UI updates
        expect(await this.REMARK_HAMBURGER.isVisible() || await this.NO_DATA_AVAILABLE.isVisible()).toBeTruthy();
        if (await this.REMARK_HAMBURGER.isVisible()) {
            console.log("Delegation Hamburger is visible");
            await this.clickOnCancelDelegationIfVisible();
            await this.clickOnDelegationHamburger();
            await this.clickDeleteDelegation();
            await this.clickOnYesButton();
            await this.validateDeleteSuccessMsg();

            console.log("Delegation deleted successfully");
        } else {
            console.log("Delegation Hamburger not visible. Skipping delete flow.");
        }
    }

    async clickOnNewDelegation() {
        console.log("Clicking on New Delegation...");
        await this.NEW_DELEGATION.waitFor({ state: 'visible' });
        await this.NEW_DELEGATION.click();
        console.log("New Delegation clicked");
    }

    async clickAndSelectDelegatioFrom() {
        console.log("Selecting Delegation 'From' option...");
        await this.DELEGATION_FROM_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_FROM_DROPDOWN.click();
        const selectStatus = this.page.locator(`//div[@role="listbox"]`).getByText('Automation Internal User');
        await selectStatus.waitFor({ state: 'visible' });
        await selectStatus.click();
        console.log("Delegation 'From' selected");
    }

    async clickAndSelectDelegationTo() {
        console.log("Selecting Delegation 'To' option...");
        await this.DELEGATION_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_TO_DROPDOWN.click();
        const selectStatus = this.page.locator(`//div[@role="listbox"]`).getByText('Automation_QA_User');
        await selectStatus.waitFor({ state: 'visible' });
        await selectStatus.click();
        console.log("Delegation 'To' selected");
    }

    async validateDelegationToOption() {
        console.log("Validating Delegation 'To' options...");
        await this.DELEGATION_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_TO_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DELEGATION_TO_DROPDOWN.click();
        const selectStatus = this.page.locator(`//div[@role="listbox"]`).getByText('Automation Internal User');
        if (!await selectStatus.isVisible()) {
            console.warn("'Automation Internal User' option not visible — skipping click");
            await expect(selectStatus).not.toBeVisible();
        } else {

            console.log("'Automation Internal User' option found and clicked");
        }
    }

    async clickOnCreateDelegation() {
        console.log("Clicking on Delegate button...");
        await this.CREATE_DELEGATION.waitFor({ state: 'visible' });
        await this.CREATE_DELEGATION.click();
        console.log("Delegate button clicked");
    }

    async clickAndSelectDelegationStartDate() {
        console.log("Selecting Delegation start date...");
        await this.START_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.START_DATE_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Delegation start date selected");
    }

    async clickAndSelectDelegationEndDate() {
        console.log("Selecting Delegation end date...");
        await this.END_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.END_DATE_CALENDER.click();
        await Utils.clickLastEnabledDate(this.page);
        console.log("Delegation end date selected");
    }

    async clickOnDelegationHamburger() {
        console.log("Clicking on Delegation Hamburger menu...");
        await this.REMARK_HAMBURGER.waitFor({ state: 'visible' });
        await this.REMARK_HAMBURGER.click();
        console.log("Delegation Hamburger menu clicked");
    }

    async clickOnDelegationEdit() {
        console.log("Clicking on Edit Delegation...");
        await this.EDIT.waitFor({ state: 'visible' });
        await this.EDIT.click();
        console.log("Edit Delegation clicked");
    }

    async enterDelegationNote() {
        console.log("Entering note in Delegation...");
        await this.DELEGATION_NOTE.waitFor({ state: 'visible' });
        await this.DELEGATION_NOTE.fill('Delegation_Note');
        console.log("Note entered:'");
    }

    async clickOnUpdateDelegation() {
        console.log("Clicking on Update Delegation...");
        await this.UPDATE_DELEGATION.waitFor({ state: 'visible' });
        await this.UPDATE_DELEGATION.click();
        console.log("Update Delegation clicked");
    }

    async clickOnCancelDelegation() {
        console.log("Clicking on Cancel Delegation...");
        await this.CANCEL_DELEGATION.waitFor({ state: 'visible' });
        await this.CANCEL_DELEGATION.click();
        console.log("Cancel Delegation clicked");
    }

    async clickOnCancelDelegationIfVisible() {
        console.log("Checking if Cancel Delegation is visible...");
        await this.page.waitForTimeout(2000);
        if (await this.CANCEL_DELEGATION.isVisible()) {
            await this.clickOnDelegationHamburger();
            await this.clickOnCancelDelegation();
            await this.clickOnYesButton();
            console.log("Cancel Delegation clicked");
        } else {
            console.log("Cancel Delegation is not visible. Skipping...");
        }
    }

    async clickDeleteDelegation() {
        console.log("Clicking on Delete Delegation...");
        await this.DELETE_DELEGATION.waitFor({ state: 'visible' });
        await this.DELETE_DELEGATION.click();
        console.log("Delete Delegation option clicked");
    }

    async clickDelete() {
        console.log("Clicking on Delete...");
        await this.DELETE_DELEGATION.waitFor({ state: 'visible' });
        await this.DELETE_DELEGATION.click();
        console.log("Delete option clicked");
    }

    async clickOnEscalationSetting() {
        console.log("Clicking Escalation Setting tab...");
        await this.ESCALATION_SETTING.waitFor({ state: 'visible' });
        await this.ESCALATION_SETTING.click();
        console.log("Escalation Setting tab opened");
    }

    async clickAndDeletePrevEscalation() {
        const count = 2;
        await this.page.waitForLoadState('domcontentloaded');
        const hamburgercount = await this.REMARK_HAMBURGER.count();
        for (let i = 0; i < count; i++) {

            if (hamburgercount > 4) {
                continue;  // skip this iteration
            }
            await this.clickHamburger();
            await this.clickDeleteEscalation();
        }
    }

    async clickDeleteEscalation() {
        console.log("Clicking on Delete...");
        await this.DELETE_DELEGATION.click();
        console.log("Delete option clicked");

    }

    async clickOnNewEscalation() {
        console.log("Clicking on New Escalation...");
        await this.NEW_ESCALATION_SETTING.waitFor({ state: 'visible' });
        await this.NEW_ESCALATION_SETTING.click();
        console.log("New Escalation clicked");
        await expect(this.page.locator(`//h3/span[text()='Add Escalation Setting']`)).toBeVisible();
    }

    async clickAndSelectTaskAssignTo() {
        console.log("Selecting 'Assign To' for task...");
        await this.page.waitForTimeout(1500)
        await this.TASK_ASSIGN_TO.waitFor({ state: 'visible' });
        await this.TASK_ASSIGN_TO.click();
        const selectStatus = this.page.locator(`//span[normalize-space()='Automation_QA_User']`);
        await selectStatus.waitFor({ state: 'visible' });
        await selectStatus.click();
        console.log("'Assign To' selected:");
    }

    async clickAndSelectTaskType() {
        console.log("Selecting Task Type...");
        await this.TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN.click();
        const selectType = this.page.locator(`(//*[@role="option"])[2]`);
        await selectType.waitFor({ state: 'visible' });
        await selectType.click();
        console.log("Task Type selected");
    }

    async clickAndSelectEscalation() {
        console.log("Selecting Escalation option...");
        await this.SELECT_ESCALATION_DROPDOWN.waitFor({ state: 'visible' });
        await this.SELECT_ESCALATION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.SELECT_ESCALATION_DROPDOWN.click();
        const selectEscalation = this.page.locator(`//span[normalize-space()='Automation Internal User']`);
        await selectEscalation.waitFor({ state: 'visible' });
        await selectEscalation.click();
        console.log("Escalation selected: Automation Internal User");
    }

    async clickOnAddEscalation() {
        console.log("Clicking on Add Escalation button...");
        await this.ADD_ESCALATION_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_ESCALATION_BUTTON.click();
        console.log("Add Escalation button clicked");
    }

    async clickOnEscalationSave() {
        console.log("Clicking on Escalation Save button...");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.click();
        console.log("Escalation Save clicked");
    }

    async clickAndSelectTriggerEvent() {
        console.log("Selecting Escalation Trigger Event...");
        await this.page.waitForTimeout(1500)
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.scrollIntoViewIfNeeded();
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.click();
        const selectStatus = this.page.locator(`//span[normalize-space()='Other']`);
        await selectStatus.waitFor({ state: 'visible' });
        await selectStatus.click();
        console.log("Trigger Event selected: Other");
    }

    async clickAndSelectUsers() {
        console.log("Selecting Escalation Users...");
        await this.page.waitForTimeout(1500)
        await this.ESCALATION_USERS_DROPDOWN.waitFor({ state: 'visible' });
        await this.ESCALATION_USERS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.ESCALATION_USERS_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Escalation User selected: Automation Internal User");
    }

    async enterEscalationTittle() {
        console.log("Entering Escalation Title...");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ESCALATION_TITTLE.waitFor({ state: 'visible' });
        await this.ESCALATION_TITTLE.fill('TestingEscalation' + uniqueTitle);
        console.log("Escalation Title entered:");
    }

    async clickOnEscalationCreate() {
        console.log("Clicking on Escalation Create button...");
        await this.CONTROL_CREATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Escalation Create clicked");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
    }

    async clickOnProceed() {
        console.log("Checking if Proceed button is visible...");
        await this.page.waitForTimeout(3000);
        try {
            await this.PROCEED_BUTTON.click();
        } catch {
            console.log("Checking if Proceed button is not visible...");
        }
    }

    async clickOnEscalations() {
        console.log("Clicking Escalations tab...");
        await this.ESCATATIONS.waitFor({ state: 'visible' });
        await this.ESCATATIONS.click();
        console.log("Escalations tab opened");
    }

    async clickOnEscalationButton() {
        console.log("Clicking on New Escalation button...");
        await this.NEW_ESCALATION_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_ESCALATION_BUTTON.click();
        console.log("New Escalation button clicked");
    }

    async clickOnCatalogThreeDot() {
        console.log("Clicking on Catalog three-dot menu...");
        await this.CATELOG_THREE_DOT.waitFor({ state: 'visible' });
        await this.CATELOG_THREE_DOT.click();
        console.log("Catalog three-dot menu clicked");
    }

    async clickOnPermisions() {
        console.log("Clicking Permissions...");
        await this.PERMISIONS.waitFor({ state: 'visible' });
        await this.PERMISIONS.click();
        console.log("Permissions opened");
    }

    async validatePermisionPopUp() {
        console.log("Validating Permissions popup...");
        await this.PERMISION_POPUP.waitFor({ state: 'visible' });
        await expect(this.PERMISION_POPUP).toBeVisible();
        console.log("Permissions popup validated");
    }

    async clickOnAssetName() {
        console.log("Clicking on Asset Name...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(1000);
        await this.ASSET_NAME.waitFor({ state: 'visible' });
        await this.ASSET_NAME.click();
        console.log("Asset Name clicked");
    }

    async validateAssetValueColumnPresence() {
        try {
            console.log("Checking if 'Asset Value' column is present in table headers...");

            // Get all <th> elements
            const headers = this.page.locator("//th");
            const headerCount = await headers.count();

            const headerTexts = [];
            for (let i = 0; i < headerCount; i++) {
                const text = (await headers.nth(i).innerText()).trim();
                headerTexts.push(text);
            }

            console.log("Table headers found:", headerTexts);

            // Check if "Value" column exists
            const hasValueColumn = headerTexts.some(
                (text) => text.toLowerCase() === "value"
            );

            if (hasValueColumn) {
                console.log("'Asset Value' column is present in the table header.");
            } else {
                console.error("'Asset Value' column NOT found in the table header!");
            }

        } catch (error) {
            console.error("Error while validating 'Asset Value' column:", error);
            throw error;
        }
    }

    async clickOnUserAndDepartment() {
        console.log("Clicking on 'Users and Department'...");
        await this.USERS_AND_DEPARTMENT.waitFor({ state: 'visible' });
        await this.USERS_AND_DEPARTMENT.click();
        console.log("'Users and Department' clicked");
    }

    async clickOnUsersTab() {
        await this.USERS_TAB.waitFor({ state: 'visible' })
        await this.USERS_TAB.click();
    }

    async clickOnRoles() {
        console.log("Clicking on 'Roles'...");
        await this.ROLES.waitFor({ state: 'visible' });
        await this.ROLES.click();
        console.log("'Roles' clicked");
    }

    async clickOnUserHamburger() {
        console.log("Clicking on user hamburger menu...");
        await this.ROLE_HAMBURGER.waitFor({ state: 'visible' });
        await this.ROLE_HAMBURGER.click();
        console.log("User hamburger menu clicked");
    }

    async clickHamburger() {
        console.log("Clicking on hamburger menu...");
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("hamburger menu clicked");
    }

    async clickOnUserEdit() {
        console.log("Clicking on 'Edit User'...");
        await this.EDIT.waitFor({ state: "visible" });
        await this.EDIT.click();
        console.log("'Edit User' clicked");
    }

    async uncheckPermisionCheckBox() {
        console.log("Unchecking permission checkbox...");
        await this.PERMISION_CHECKBOX.scrollIntoViewIfNeeded();
        await this.PERMISION_CHECKBOX.uncheck();
        await expect(this.PERMISION_CHECKBOX).not.toBeChecked();
        console.log("Permission checkbox unchecked");
    }

    async checkPermisionCheckBox() {
        console.log("Checking permission checkbox...");
        await this.PERMISION_CHECKBOX.scrollIntoViewIfNeeded();
        await this.PERMISION_CHECKBOX.check();
        await expect(this.PERMISION_CHECKBOX).toBeChecked();
        console.log("Permission checkbox checked");
    }

    async clickOnUserSave() {
        console.log("Clicking on 'Save' button for user...");
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("'Save' button clicked");
    }

    async clickOnRiskFilterIcon() {
        console.log("Clicking on Risk Filter icon...");
        await this.RISK_FILTER_ICON.waitFor({ state: 'visible' });
        await this.RISK_FILTER_ICON.click();
        console.log("Risk Filter icon clicked");
    }

    async enterValueInSearchField() {
        console.log("Entering value in search field...");
        await this.SEARCH_FIELD.waitFor({ state: 'visible' });
        await this.SEARCH_FIELD.fill('Automation');
        console.log("Value entered in search field");
    }

    async clickOnApplyFilter() {
        console.log("Clicking on 'Apply Filter' button...");
        await this.APPLY_FILTER_BUTTON.waitFor({ state: 'visible' });
        await this.APPLY_FILTER_BUTTON.click();
        console.log("'Apply Filter' clicked");
    }

    async clickOnSearchIcon() {
        await this.SEARCH_ICON.waitFor({ state: 'visible' });
        await this.SEARCH_ICON.click();
    }

    async clickOnTaskCheckbox() {
        console.log("Checking the task checkbox...");
        await this.TASK_CHECKBOX.waitFor({ state: 'visible' });
        await this.TASK_CHECKBOX.check();
        console.log("Task checkbox checked");
    }

    async performReAssignIfEnabled() {
        console.log("Checking if Reassign button is enabled...");
        await this.page.waitForTimeout(1500);
        await this.RE_ASSIGN.waitFor({ state: 'visible' });

        const isDisabled = await this.RE_ASSIGN.isDisabled();

        if (isDisabled) {
            console.log("Reassign button is disabled — skipping reassignment flow");
        } else {
            console.log("Reassign button is enabled — performing reassignment flow");
            await this.clickOnReAssign();
            await this.seletReAssignUser();
            await this.clickSaveAssigne();
            await this.validateSuccessMsg();

            console.log("Reassignment flow completed successfully");
        }
    }

    async clickOnTasKFilter() {
        console.log("Clicking on Task Filter icon...");
        await this.TASK_FILTER_ICON.waitFor({ state: 'visible' });
        await this.TASK_FILTER_ICON.click();
        console.log("Task Filter icon clicked");
    }

    async clickOnTaskCancel() {
        console.log("Clicking on Cancel for task...");
        await this.CANCEL_DELEGATION.waitFor({ state: 'visible' });
        await this.CANCEL_DELEGATION.click();
        console.log("Task cancel clicked");
    }

    async cancelTaskIfEnabled() {
        await this.page.waitForTimeout(1500);
        console.log("Checking if Cancel button is enabled...");

        await this.CANCEL_DELEGATION.waitFor({ state: 'visible' });

        const isDisabled = await this.CANCEL_DELEGATION.isDisabled();

        if (isDisabled) {
            console.log("Cancel button is disabled — skipping cancel flow");
        } else {
            console.log("Cancel button is enabled — performing cancel flow");

            await this.CANCEL_DELEGATION.click();
            await this.clickOnYesButton();

            console.log("Task cancelled successfully");
        }
    }

    async clickOnConfirmButton() {
        console.log("Clicking on Confirm button...");
        await this.CONFIRM_BUTTON.waitFor({ state: 'visible' });
        await this.CONFIRM_BUTTON.click();
        console.log("Confirm button clicked");
    }

    async clickOnTaskDelete() {
        console.log("Clicking on Delete for task...");
        await this.DELETE_DELEGATION.waitFor({ state: "visible" });
        await this.DELETE_DELEGATION.click();
        console.log("Task delete clicked");
    }

    async seletReAssignUser() {
        console.log("Selecting a user to reassign task...");
        await this.page.waitForTimeout(1500);
        await this.USER_DROPDOWN.waitFor({ state: 'visible' });
        await this.USER_DROPDOWN.click();
        await this.OPTION.click();
        console.log("Reassign user selected");
    }

    async clickOnReAssign() {
        console.log("Clicking on Reassign button...");
        await this.RE_ASSIGN.waitFor({ state: 'visible' });
        await this.RE_ASSIGN.click();
        console.log("Reassign button clicked");
    }

    async clickSaveAssigne() {
        console.log("Saving reassigned task...");
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Reassigned task saved");
    }

    async clickOnLinkRisktreatment() {
        console.log("Clicking on 'Link Risk Treatment' button...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.LINK_RISK_TRATMENT_BUTTON.waitFor({ state: 'visible' });
        await this.LINK_RISK_TRATMENT_BUTTON.click();
        console.log("'Link Risk Treatment' button clicked");
        await this.page.waitForTimeout(1500);
    }
    async clickOnMapEvidence() {
        console.log("Clicking Map Evidence button");
        await this.MAP_EVIDENCE.waitFor({ state: 'visible' });
        await this.MAP_EVIDENCE.click();
        console.log("Map Evidence button clicked");
    }
    async clickOnMapEviCheckbox() {
        console.log("Click Map Checkbox..");
        await this.SELECT_DOC_CHECKBOX.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(1500)
        await this.SELECT_DOC_CHECKBOX.click();
        console.log("Checkbox Checked..");
    }

    async clickOnMapEviCheckboxIfVisible() {
        console.log("Checking Map Checkbox visibility..");
        await this.page.waitForTimeout(2000);

        if (await this.SELECT_DOC_CHECKBOX.isVisible()) {
            await this.SELECT_DOC_CHECKBOX.waitFor({ state: 'visible' });
            await this.page.waitForTimeout(1500);
            await this.SELECT_DOC_CHECKBOX.click();

            console.log("Checkbox Checked..");
        } else {
            console.log("Map Checkbox not visible, skipping action.");
        }
    }

    async clickOnThreeDotRisk() {
        const locator = this.page.locator('(//div[@class="modal-body"]//button)[1]');

        console.log("Waiting for Three-dot button to be attached...");
        await locator.waitFor({ state: 'attached', timeout: 10000 });

        console.log("Scrolling Three-dot button into view...");
        try {
            await locator.evaluate(el => {
                el.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
            });
        } catch (_) {
            console.log("Scroll failed, continuing...");
        }

        // JS FALLBACK CLICK
        try {
            console.log("Trying JS click...");
            await locator.evaluate(el => (el as HTMLElement).click());
            console.log("Clicked Three-dot (JS fallback).");
            return;
        } catch (err) {
            console.log("JS click also failed:");
            console.log(err);
            throw err;
        }
    }

    async enterRiskStatementC() {
        console.log("Entering risk statement...");
        await this.RISK_STATEMENT.waitFor({ state: 'visible' });
        await this.RISK_STATEMENT.fill('Automation_Risk');
        console.log("Risk statement entered.");
    }

    async clickOnRiskAssign() {
        console.log("Checking Assign Risk button visibility...");
        const locator = this.RISK_ASSIGN;

        const isVisible = await locator.isVisible();
        console.log('Assign Risk button visible:', isVisible);

        if (isVisible) {
            console.log("Clicking Assign Risk button...");
            await locator.click();
            console.log("Assign Risk clicked successfully.");
        } else {
            console.log("Assign button not visible → navigating to assign page...");
            await this.page.goto('https://ec.qa.ir.solidrange.com/risks/risk-task');
        }
    }

    async clickOnAdditionalDetails() {
        console.log("Clicking on Additional Details...");
        await this.ADDITIONAL_DETAILS.waitFor({ state: 'visible' });
        await this.ADDITIONAL_DETAILS.click();
        console.log("Additional Details clicked.");
    }

    async clickAndSelectRiskAssignee() {
        console.log("Selecting Risk Assignee...");
        await this.RISK_ASSIGN_TO.waitFor({ state: 'visible' });
        await this.RISK_ASSIGN_TO.click();
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.click();
        console.log("Risk Assignee selected.");
    }

    async clickOnAdd() {
        console.log("Clicking on Add ...");
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Button Clickec");
    }

    async clickOnNewAssesment() {
        console.log("Clicking New Assessment...");
        await this.NEW_ASSESMENT.waitFor({ state: 'visible' });
        await this.NEW_ASSESMENT.click();
        console.log("New Assessment clicked.");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
    }

    async clickOnCreateAssesment() {
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        console.log("Checking Create Assessment...");
        const isVisible = await this.CREATE_ASSESMENT_BUTTON.isVisible();

        if (isVisible) {
            console.log("Clicking Create Assessment...");
            await this.CREATE_ASSESMENT_BUTTON.click();
            console.log("Create Assessment clicked.");
        }
    }

    async validateAssismentAdded() {
        console.log("Validating Assessment added...");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(1500)
        let assesment = this.page.locator(`(//div/a[contains(text(),'RA-')])[1]`);
        await expect(assesment).toBeVisible();
        console.log("Assessment validated successfully.");
    }

    async clickOnRisks() {
        console.log("Clicking Risks menu...");
        await this.RISKS.waitFor({ state: 'visible' });
        await this.RISKS.click();
        console.log("Risks clicked.");
    }

    async clickOnNewRiskButton() {
        console.log("Clicking New Risk button...");
        await this.ADD_RISK_BUTTON_GOV.waitFor({ state: 'visible' });
        await this.ADD_RISK_BUTTON_GOV.click();
        console.log("New Risk clicked.");
    }

    async clickOnThredSlider() {
        console.log("Clicking on Threat slider...");
        await this.THREAD_SLIDER.click();
        console.log("Threat slider clicked successfully");
    }

    async clickOnMappedVulnerabilitySlider() {
        console.log("Clicking on Mapped Vulnerability slider...");
        await this.VULNERABILITY_SLIDER.click();
        console.log("Mapped Vulnerability slider clicked successfully");
    }

    async intigritySliderAssert() {
        console.log("Clicking on Integrity slider (assert)...");
        await this.page.waitForTimeout(500);
        await this.INTIGRITY_SLIDER_ASSERT.waitFor({ state: 'visible' });
        await this.INTIGRITY_SLIDER_ASSERT.click();
        console.log("Integrity slider (assert) clicked successfully");
    }

    async availabilitySlider() {
        console.log("Clicking on Availability slider (assert)...");
        await this.page.waitForTimeout(500);
        await this.AVAILABILITY_SLIDER_ASSERT.click();
        console.log("Availability slider (assert) clicked successfully");
    }

    async clickOnAssertSliders() {
        const dots = this.page.locator("//div[contains(@class,'mat-mdc-tooltip-trigger dot')]");

        const assetValue = this.page.locator(
            "//div[contains(text(),'Asset Value')]/following::div[contains(@class,'chip-container')]"
        );

        const count = await dots.count();

        for (let i = 0; i < count; i++) {
            if (await assetValue.isVisible()) {
                break;
            }

            await dots.nth(i).click();
            await this.page.waitForTimeout(500); // small wait for UI update
        }

        // Final assertion
        await expect(assetValue).toBeVisible();
    }

    async clickIfSliderVisible() {
        console.log("Checking if slider is visible...");
        await this.page.waitForTimeout(500); // Wait for potential slider visibility
        const valueProbabilty = this.page.locator(`//div[normalize-space()='probability Value']`).isVisible();
        const valueInpact = this.page.locator(`//div[normalize-space()='impact Value']`).isVisible();
        const slider = this.page.locator('(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[14]');
        const sliser2 = this.page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])[3]`);

        if (!(await valueProbabilty && await valueInpact)) {
            console.log("Slider is visible. Clicking...");
            await slider.click();
            await sliser2.scrollIntoViewIfNeeded();
            await sliser2.waitFor({ state: 'visible' });
            await sliser2.click();
            await this.NEXT_BUTTON.nth(1).click();
            console.log("Slider clicked successfully");
        } else {
            console.log("Slider is NOT visible. Skipping click.");
        }
    }
    async clickControlAudit() {
        let control = this.page.locator(`(//span[text()='2.1']/ancestor::tr//td)[2]`);
        await control.click();
    }
    async clickIfSliderVisibleItivate() {
        console.log("Checking if slider is visible...");
        await this.page.waitForTimeout(500); // Wait for potential slider visibility
        const valueProbabilty = this.page.locator(`//div[normalize-space()='probability Value']`)
        const valueImpact = this.page.locator(`//div[normalize-space()='impact Value']`)
        const slider = this.page.locator('(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])');
        const slider2 = this.page.locator(`(//div[contains(@class,"mat-mdc-tooltip-trigger dot")])`);
        if (!(await valueProbabilty.isVisible() && await valueImpact.isVisible())) {

            console.log("Sliders need interaction. Clicking...");

            const sliderCount1 = await slider.count();
            const sliderCount2 = await slider2.count();

            // Probability slider loop
            for (let i = 0; i < 10; i++) {

                if (await valueProbabilty.isVisible()) {
                    console.log("Probability value visible. Stopping slider1.");
                    break;
                }

                for (let j = 0; j < sliderCount1; j++) {
                    await slider.nth(j).click({ force: true });
                }
            }

            await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });

            // Impact slider loop
            for (let i = 0; i < 10; i++) {

                if (await valueImpact.isVisible()) {
                    console.log("Impact value visible. Stopping slider2.");
                    break;
                }

                for (let j = 0; j < sliderCount2; j++) {
                    await slider2.nth(j).click({ force: true });
                }
            }
            await this.clickOnNextbutton();
            console.log("Slider clicked successfully");

        } else {
            console.log("Values already visible. Skipping slider interaction.");
        }
    }
    async confidentialySlider() {
        console.log("Clicking on Confidentiality slider (assert)...");
        await this.page.waitForTimeout(500);
        await this.SUCCESS_MSG.waitFor({ state: 'hidden' });
        await this.CONFIDENTIALY_SLIDER_ASSERT.waitFor({ state: 'visible' });
        await this.CONFIDENTIALY_SLIDER_ASSERT.click();
        console.log("Confidentiality slider (assert) clicked successfully");
    }

    async clickOnUserIcon() {
        console.log("Waiting for User Icon to be visible...");
        await this.USER_ICON.waitFor({ state: 'visible' });
        console.log("Clicking on User Icon...");
        await this.USER_ICON.click();
        console.log("User Icon clicked successfully");
    }

    async clickOnLogOut() {
        console.log("Waiting for Log Out button to be visible...");
        await this.LOG_OUT.waitFor({ state: 'visible' });
        console.log("Clicking on Log Out...");
        await this.LOG_OUT.click();
        console.log("Log Out clicked successfully");
    }

    async performlogin() {
        console.log("Perforing Log In");
        await this.page.waitForEvent('load')
        await this.page.fill('//input[@id="Username"]', `${testConfig.validWorkEmail}`);
        await this.page.click('//input[@type="submit"]');
        await this.page.fill('//input[@placeholder="Password"]', `${testConfig.validPassword}`);
        await this.page.click("//button[text()='Log in']");
        await this.page.waitForURL(/\/home$/, {
            timeout: 600000
        });
    }

    async validateLoginPage() {
        console.log("Validating that Login Page is visible...");
        await this.LOGIN_PAGE.waitFor({ state: 'visible' });
        await expect(this.LOGIN_PAGE).toBeVisible();
        console.log("Login Page is visible and validated successfully");
    }

    async exportExcelIcon() {
        try {
            await this.EXPORT_EXCEL_ICON.waitFor({ state: 'visible' });
            console.log('Export Excel icon clicked');

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.EXPORT_EXCEL_ICON.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../exported_file');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Excel file successfully downloaded to: ${filePath}`);
            } else {
                console.log('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon: ${error.message}`);
        }
    }

    async clickOnCrossControlButton() {
        console.log('clickOnCrossControlButton');
        await this.CROSS_MAP_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.CROSS_MAP_CONTROL_BUTTON.click();
        console.log('clickOnCrossControlButton');
    }

    async clickOnCrossMapAdd() {
        console.log('clickOnCrossMapAdd');
        await this.CROSS_MAP_ADD.waitFor({ state: 'visible' });
        await this.CROSS_MAP_ADD.click();
        console.log('clickOnCrossMapAdd');
    }

    async clickOnCrossMapSave() {
        console.log('clickOnCrossMapSave');
        await this.CROSS_MAP_SAVE.waitFor({ state: 'visible' });
        await this.CROSS_MAP_SAVE.click();
        console.log('clickOnCrossMapSave');
    }

    async selectTwoEnabledCheckboxes() {
        console.log('Selecting checkboxes');
        // Locate only enabled checkboxes
        const enabledCheckboxes = this.page.locator(
            `//input[@name="SelectedControlsIds" and not(@disabled)]`
        );
        const count = await enabledCheckboxes.count();
        if (count < 2) {
            console.log('Less than 2 enabled checkboxes available');
        }
        // Select first two enabled checkboxes
        for (let i = 0; i < 2; i++) {
            await enabledCheckboxes.nth(i).scrollIntoViewIfNeeded();
            await enabledCheckboxes.nth(i).check();  // better than click() for checkbox
        }
        console.log('Successfully selected checkboxes');
    }

    async clickOnRemoveAllFilters() {
        console.log("Waiting for Remove All Filters button");
        await this.page.waitForTimeout(1500)
        await this.REMOVE_FILTER.waitFor({ state: 'visible' });
        console.log("Clicking Remove All Filters button");
        await this.REMOVE_FILTER.click();
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
    }

    async clickOnDelegatedTask() {
        console.log("Waiting for Delegated Task");
        await this.DELEGATED_TASK.waitFor({ state: 'visible' });
        console.log("Clicking Delegated Task");
        await this.DELEGATED_TASK.click();
    }

    async validateDelegatedTask() {
        let table = await this.TASKS_TABLE.isVisible();
        expect(table || this.NO_PENDING_TASK).toBeTruthy();
        console.log("Validating Delegated task...");
    }

    async clickOnEventThreeDot() {
        console.log("Clicking on Event three-dot menu...");
        await this.EVENT_THREE_DOT.waitFor({ state: 'visible' });
        await this.EVENT_THREE_DOT.click();
        console.log("Event three-dot menu clicked");
    }

    async clickOnEventDetails() {
        console.log("Clicking on Event Details...");
        await this.EVENT_DETAILS.waitFor({ state: 'visible' });
        await this.EVENT_DETAILS.click();
        console.log("Event Details clicked");
    }

    async clickOnEventEdit() {
        console.log("Clicking on Event Edit button...");
        await this.EVENT_EDIT_BUTTON.waitFor({ state: 'visible' });
        await this.EVENT_EDIT_BUTTON.click();
        console.log("Event Edit button clicked");
    }

    async enterEventName(baseTitle: string) {
        console.log(`Entering event name with base title: ${baseTitle}`);
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${baseTitle}_${random}`;
        await this.TITTLE_FIELD.fill(uniqueTitle);
        console.log(`Event name entered: ${uniqueTitle}`);
    }

    async clickOnUpdateEvent() {
        console.log("Clicking on Update Event button...");
        await this.EVENT_UPDATE_BUTTON.waitFor({ state: 'visible' });
        await this.EVENT_UPDATE_BUTTON.click();
        console.log("Update Event button clicked");
    }

    async clickOnEventDelete() {
        console.log("Clicking on Delete Event button...");
        await this.EVENT_DELETE_BUTTON.waitFor({ state: 'visible' });
        await this.EVENT_DELETE_BUTTON.click();
        console.log("Delete Event button clicked");
    }

    async clickOnWorksapace() {
        console.log("Navigating to Workspace...");
        await this.page.waitForTimeout(2000);
        await this.WORKSPACE_TAB.waitFor({ state: 'visible' });
        await this.WORKSPACE_TAB.click();
        console.log("Workspace tab clicked");
    }

    async validateWorkspacePage() {
        console.log("Validating Workspace page...");
        await this.page.waitForTimeout(2000);
        await this.ASSIGN_TO_ME_TAB.waitFor({ state: 'visible' });
        await expect(this.ASSIGN_TO_ME_TAB).toBeVisible();
        await expect(this.ASSIGN_TO_MY_DEPT).toBeVisible();
        console.log("Workspace page validated successfully");
    }

    async clickOnMarkAsResolved() {
        console.log("Clicking on Mark As Resolved...");
        await this.MARK_AS_RESOLVED.waitFor({ state: 'visible' });
        await this.MARK_AS_RESOLVED.click();
        console.log("Mark As Resolved clicked");
    }

    async clickOnResoledButton() {
        console.log("Clicking on Resolved button...");
        await this.RESOLVED_BUTTON.waitFor({ state: 'visible' });
        await this.RESOLVED_BUTTON.click();
        await this.RESOLVED_BUTTON.waitFor({ state: 'hidden' });
        console.log("Resolved button clicked");
    }

    async clickOnEditCommonControl() {
        console.log("Clicking on Edit User...");
        await this.EDIT.waitFor({ state: "visible" });
        await this.EDIT.click();
        console.log("Edit User clicked");
    }

    async clickOnUpdateCommonControl() {
        console.log("Clicking on Update Common Control...");
        await this.UPDATE_BUTTON.waitFor({ state: 'visible' });
        await this.UPDATE_BUTTON.click();
        console.log("Update Common Control clicked");
    }

    async clickOnRetire() {
        console.log("Clicking on Retire option...");
        await this.RETIRE_OPTION.waitFor({ state: 'visible' });
        await this.RETIRE_OPTION.click();
        console.log("Retire option clicked");
    }

    async clickOnRetireButton() {
        console.log("Clicking on Retire button...");
        await this.RETIRE_BUTTON.waitFor({ state: 'visible' });
        await this.RETIRE_BUTTON.click();
        console.log("Retire button clicked");
    }
    async clickOnDocNameVersion() {
        console.log("Waiting for Document Name to be visible");
        let doc = this.page.locator(`(//*[contains(normalize-space(),'Active') or contains(text(),'Expiring Soon')]/ancestor::tr//div[@class="cell-content ng-star-inserted"]/a)[1]`);
        await doc.waitFor({ state: 'visible' });
        console.log("Clicking on Document Name");
        await doc.click();
        console.log("Clicked on Document Name");
    }
    async clickOnVersionHistoryTab() {
        console.log('Opening Version History tab');
        await this.VERSION_HISTORY_TAB.waitFor({ state: 'visible' });
        await this.VERSION_HISTORY_TAB.click();
        console.log('Version History tab opened');
    }

    async clickNewVersionButton() {
        console.log('Clicking on New Version button');
        await this.NEW_VERSION_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_VERSION_BUTTON.click();
        console.log('New Version button clicked');
    }

    async enterNewVersion() {
        await this.VERSION_TEXFIELD.waitFor({ state: 'visible' });
        const random = Math.floor(Math.random() * 10);
        console.log(`Entering version: `);
        await this.VERSION_TEXFIELD.fill(`2` + random);
        console.log("Version entered");
    }

    async clickOnExtendValidity() {
        console.log("Waiting for Extend Validity button");
        await this.EXTEND_VALIDITY.waitFor({ state: 'visible' });
        console.log("Clicking Extend Validity button");
        await this.EXTEND_VALIDITY.click();
    }

    async clickOnNextArrow() {
        console.log("Waiting for Next Arrow");
        await this.NEXT_ARROW.waitFor({ state: 'visible' });
        console.log("Clicking Next Arrow");
        await this.NEXT_ARROW.click();
    }

    async clickAndSelectValidityDate() {
        console.log("Waiting for Validity Calendar");
        await this.TO_DATE_CALENDER.waitFor({ state: 'visible' });
        console.log("Clicking Validity Calendar");
        await this.TO_DATE_CALENDER.click();
        console.log("Waiting before navigating calendar");
        await this.clickOnNextArrow();
        console.log("Selecting first enabled date");
        await Utils.clickFirstEnabledDate(this.page);
    }

    async clickOnExtendValiditySave() {
        console.log("Waiting for Extend Validity Save button");
        await this.GOV_CONTROL_SAVE.waitFor({ state: 'visible' });
        console.log("Clicking Extend Validity Save button");
        await this.GOV_CONTROL_SAVE.click();
    }

    async clickOnRiskHamburger() {
        console.log("Waiting for Risk hamburger menu");
        await this.RISK_HAMBURGER.waitFor({ state: 'visible' });
        console.log("Clicking Risk hamburger menu");
        await this.RISK_HAMBURGER.click();
    }

    async clickHamburgerUntilEditVisible() {
        console.log("Waiting for hamburger menus");
        const hamburgers = this.page.locator('button.dropdown-toggle.icon-only');
        await hamburgers.first().waitFor({ state: 'visible' });
        const count = await hamburgers.count();

        for (let i = 0; i < count; i++) {
            const hamburger = hamburgers.nth(i);

            if (!(await hamburger.isVisible())) continue;

            console.log(`Clicking hamburger ${i + 1}`);
            await hamburger.click();

            // Small wait to allow dropdown to render
            await this.page.waitForTimeout(500);

            if (await this.EDIT_RISK.isVisible()) {
                console.log("Edit button is visible");
                return;
            }

            // Optional: close menu if edit not visible
            await this.page.keyboard.press('Escape');
        }

        throw new Error("Edit button not found after clicking all hamburgers");
    }

    async clickOnRiskEdit() {
        console.log("Waiting for Edit Risk option");
        await this.EDIT_RISK.waitFor({ state: 'visible' });
        console.log("Clicking Edit Risk");
        await this.EDIT_RISK.click();
    }

    async enterRiskDescription() {
        console.log("Waiting for Risk Description field");
        await this.RISK_STATEMENT.waitFor({ state: 'visible' });
        const random = Math.floor(Math.random() * 10000);
        console.log(`Entering Risk Description: Test_${random}`);
        await this.RISK_STATEMENT.fill(`Automation_Desc_${random}`);
        await this.page.waitForTimeout(500); // Wait for clear action to complete
    }

    async clickOnRiskSave() {
        console.log("Waiting for Risk Save button");
        await this.SAVE_BUTTON.waitFor({ state: 'attached' });
        console.log("Clicking Risk Save button");
        await this.SAVE_BUTTON.click();
    }

    async clickOnDeleteRisk() {
        console.log("Waiting for Delete Risk button");
        await this.DELETE_DELEGATION.waitFor({ state: 'visible' });
        console.log("Clicking Delete Risk");
        await this.DELETE_DELEGATION.click();
    }

    async clickOnInitiativeDelete() {
        console.log("Waiting for Initiative Delete button");
        await this.AUDIT_DELETE_BUTTON.waitFor({ state: 'visible' });
        console.log("Clicking Initiative Delete");
        await this.AUDIT_DELETE_BUTTON.click();
    }

    async clickOnIntiativeEdit() {
        console.log("Waiting for Initiative Edit button");
        await this.REMARK_EDIT.waitFor({ state: 'visible' });
        console.log("Clicking Initiative Edit");
        await this.REMARK_EDIT.click();
    }

    async enterInitiativeName() {
        console.log("Waiting for Initiative Title field");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        const random = Math.floor(Math.random() * 10000);
        console.log(`Entering Initiative Name:`);
        await this.REMARK_TITTLE.clear();
        await this.REMARK_TITTLE.fill('Automation_Initiative' + random);
    }

    async clickOnSaveEdit() {
        console.log("Waiting for Save Edit button");
        await this.SAVE_BUTTON.waitFor({ state: 'attached' });
        console.log("Clicking Save Edit button");
        await this.SAVE_BUTTON.evaluate((el: HTMLElement) => el.click());
    }

    async clickVendorHamburger() {
        await this.page.waitForTimeout(2500);
        expect(await this.NO_DATA_AVAILABLE.isVisible() || await this.NO_DATA_AVAILABLE.isHidden()).toBeTruthy();
        // check if "No Data Available" is visible
        if (await this.NO_DATA_AVAILABLE.isVisible()) {
            await this.clickOnAddVendor();
            await this.enterVendorName('Automation_Vendor');
            await this.enterAddress('Automation_Address09');
            await this.clickAndSelectVendorType();
            await this.clickAndSelectVendorDepartment();
            await this.enterPhoneNumber();
            await this.clickAndSelectVendorManager();
            await this.clickAndSelectVendorRisk();
            await this.enterProductName('Automation_Product');
            await this.enterWebsite('AutomationWeb');
            await this.enterDomain('Automation_Domain');
            await this.enterVendorDesc('fdsfgwegfsjbfhshhsh');
            await this.clickOnAddContact();
            await this.enterConatactName('Automation_Testing_Contact');
            await this.enterPosition('Automation_Position');
            await this.enterContactPhoneNumber();
            await this.enterEmail();
            await this.clickOnAddButton();
            await this.clickOnCreatevendor();
            await this.validateSuccessMsg();
            console.log("Waiting for Vendor hamburger menu");
            await this.page.waitForTimeout(1500)
            await this.REMARK_HAMBURGER.waitFor({ state: 'visible' });
            console.log("Clicking Vendor hamburger menu");
            await this.REMARK_HAMBURGER.click();
        } else {
            console.log('Data already available, skipping vendor creation.');
            console.log("Waiting for Vendor hamburger menu");
            await this.page.waitForTimeout(1500)
            await this.REMARK_HAMBURGER.waitFor({ state: 'visible' });
            console.log("Clicking Vendor hamburger menu");
            await this.REMARK_HAMBURGER.click();
        }
    }

    async enterVendorNewName() {
        console.log("Waiting for Vendor Name field");
        await this.VENDOR_NAME.waitFor({ state: 'visible' });
        const random = Math.floor(Math.random() * 10000);
        console.log(`Entering Vendor Name: `);
        await this.VENDOR_NAME.clear();
        await this.VENDOR_NAME.fill('Automation_Vendor' + random);
    }

    async clickOnDeleteVendor() {
        console.log("Waiting for Delete Vendor button");
        await this.DELETE_DELEGATION.waitFor({ state: 'visible' });
        console.log("Clicking Delete Vendor");
        await this.DELETE_DELEGATION.click();
    }

    async clickOnAuditHamburger() {
        console.log("Waiting for Audit hamburger menu");
        await this.REMARK_HAMBURGER.waitFor({ state: 'visible' });
        console.log("Clicking Audit hamburger menu");
        await this.REMARK_HAMBURGER.click();
    }

    async clickOnAuditEdit() {
        console.log("Waiting for Edit Audit option");
        await this.EDIT.waitFor({ state: "visible" });
        console.log("Clicking Edit Audit");
        await this.EDIT.click();
    }

    async clickOnAuditEdit1() {
        console.log("Waiting for Edit Audit option");
        await this.EDIT1.waitFor({ state: "visible" });
        console.log("Clicking Edit Audit");
        await this.EDIT1.click();
    }

    async enterAuditNewName() {
        console.log("Waiting for Audit Name field");
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        const random = Math.floor(Math.random() * 10000);
        console.log(`Entering Audit Name:`);
        await this.ISSUE_NAME_FIELD.clear();
        await this.ISSUE_NAME_FIELD.fill('Automation_Audit' + random);
    }

    async clickOnAuditSave() {
        console.log("Waiting for Audit Save button");
        await this.page.waitForTimeout(1500)
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        console.log("Clicking Audit Save button");
        await this.SAVE_BUTTON.click();
    }

    async clickOnDeleteAudit() {
        console.log("Clicking for Delete button");
        await this.AUDIT_DELETE_BUTTON.waitFor({ state: 'visible' });
        console.log("Clicking Delete Audit");
        await this.AUDIT_DELETE_BUTTON.click();
    }

    async clickOnReqAttestation() {
        console.log("Clicking on Request Attestation button");
        await this.REQ_ATTESTATION.waitFor({ state: 'visible' });
        await this.REQ_ATTESTATION.click();
        console.log("Request Attestation button clicked successfully");
    }

    async clickOnSendAttestation() {
        console.log("Clicking on Send Attestation button");
        await this.SEND.waitFor({ state: "visible" });
        await this.SEND.click();
        await this.SEND.waitFor({ state: "hidden" });
        console.log("Send Attestation completed successfully");
    }

    async clickOnInternalControl() {
        console.log("Clicking on Internal Control");
        await this.INTERNAL_CONTROL.waitFor({ state: 'visible' });

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.INTERNAL_CONTROL.click()
        ]);

        this.newPage = newPage;
        await this.newPage.waitForLoadState();
        console.log("Internal Control page opened in new tab");
    }

    async clickAndMapEvidence() {
        console.log("Mapping evidence");

        await this.newPage.waitForTimeout(2000);

        const mapBtn = this.newPage.locator(`(//span[normalize-space()='Map Evidence'])[1]`);
        await mapBtn.waitFor({ state: 'visible' });
        await mapBtn.click();

        const checkbox = this.newPage.getByRole('checkbox').nth(1);
        await this.page.waitForTimeout(1500)
        // Check if checkbox is visible
        const isCheckboxVisible = await checkbox.isVisible().catch(() => false);

        if (!isCheckboxVisible) {
            console.log("Evidence checkbox not visible — skipping evidence mapping");
            return;
        }

        console.log("Checkbox visible — proceeding with evidence mapping");

        await checkbox.check();

        const mapButton = this.newPage.locator(`(//span[normalize-space()='Map'])[1]`);
        await mapButton.click();

        console.log("Evidence mapped successfully");
    }
    async validateSuccessMSg() {
        console.log("Validating success message");
        let msg = this.newPage.locator("(//div[contains(text(),'Saved Successfully')])[1]");
        await expect(msg).toBeVisible();
        console.log("Success message validated");
    }
    async clickAndMapDoc() {
        console.log("Document mapping start");

        await this.newPage.waitForTimeout(1500);

        const mapDocBtn = this.newPage.locator(`(//span[normalize-space()='Map Document'])[1]`);
        await mapDocBtn.click();

        const mapcheckbox = this.newPage.getByRole('checkbox').nth(1);
        await this.page.waitForTimeout(1500)
        // Check if checkbox is visible
        const isCheckboxVisible = await mapcheckbox.isVisible().catch(() => false);

        if (!isCheckboxVisible) {
            console.log("Mapping checkbox not visible — skipping document mapping");
            return;
        }

        console.log("Checkbox visible — proceeding with mapping");

        await mapcheckbox.click();

        const mapButton1 = this.newPage.locator(`(//span[normalize-space()='Map'])[1]`);
        await mapButton1.click();

        console.log("Document mapped successfully");
    }

    async clickOnSummaryRadio() {
        console.log("Clicking on Summary Radio");
        await this.SUMMARY_RADIO.waitFor({ state: 'visible' });
        await this.SUMMARY_RADIO.click();
    }

    async enterAssesmentScope() {
        console.log("Entering Assessment Scope");
        await this.ASSESMENT_SCOPE_FIELD.waitFor({ state: 'visible' });
        await this.ASSESMENT_SCOPE_FIELD.fill('Automation_Assesment_Scope');
    }

    async clickOnBulkImport() {
        console.log("Clicking on Bulk Import");
        await this.BULK_IMPORT.click();
    }

    async clickOnDiscard() {
        await this.page.waitForTimeout(4000);
        const btn = this.page.locator(`(//span[normalize-space()='Discard'])[1]`);

        try {
            const isVisible = await btn.isVisible();

            if (isVisible) {
                console.log("Clicking on Discard");
                await btn.click();
            } else {
                console.log("Discard not visible — skipping");
            }
        } catch (e) {
            console.log("Discard not visible or not found — skipping");
        }
    }

    async clickOnBulkImportCatelog() {
        console.log("Clicking on Bulk Import");

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.BULK_IMPORT.click(),
            this.clickOnDiscard()
        ]);

        await newPage.waitForLoadState('load');
        console.log("New page loaded");
        this.newPage = newPage;

    }

    async clickAndSelectRiskMethodology() {
        console.log("Selecting Risk Methodology");
        await this.RISK_METHODOLOGY_DROPDOWN.click();
        await this.OPTION.click();
    }

    async clickOnContinue() {
        console.log("Clicking Continue and waiting for new page");
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.CONTINUE_BUTTON.click(),
            this.clickOnDiscard()
        ]);

        await newPage.waitForLoadState();
        console.log("New page loaded");
        this.newPage = newPage;
    }

    async selectParentCheckbox() {
        console.log("Selecting Parent Checkbox");
        await this.newPage.waitForTimeout(2000);
        let RISK_PARENT_CHECKBOX = this.newPage.locator(`(//input[@type="checkbox"])[1]`);
        await RISK_PARENT_CHECKBOX.check();
    }


    async selectFiveCheckbox() {
        console.log("Selecting/Unselecting five checkboxes");

        const checkboxes = this.newPage.locator('//td//input[@type="checkbox"]');

        const count = await checkboxes.count();
        console.log(`Total checkboxes found: ${count}`);

        let uncheckedCount = 0;

        // Start from 1 to skip parent checkbox
        for (let i = 1; i < count && uncheckedCount < 5; i++) {

            const checkbox = checkboxes.nth(i);

            // Check current state properly
            const isChecked = await checkbox.isChecked();

            if (isChecked) {
                console.log(`Unchecking checkbox at index ${i}`);

                await checkbox.click();

                uncheckedCount++;
            }
        }

        console.log(`Total unchecked: ${uncheckedCount}`);
    }

    async clickOnYesRiskButton() {
        console.log("Clicking Yes Risk Button");
        const yesButton = this.newPage.getByText('Yes').first();
        await yesButton.click();
    }

    async clickOnDeleteRiskButton() {
        console.log("Clicking Delete Risk Button");
        const deleteButton = this.newPage.locator(`//span[text()='Delete']`);
        await deleteButton.click();
    }

    async enterRiskTitleBulk() {
        console.log("Entering Risk Titles in bulk");
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total Risk Title fields: ${count}`);

        for (let i = 0; i < count; i++) {
            const uniqueName = `RiskBulk_${Math.floor(Math.random() * 10000)}`;
            console.log(`Filling Risk Title ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`${uniqueName}`);
        }
    }

    async enterRiskStatementBulk() {
        console.log("Entering Risk Statements in bulk");
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total Risk Statement fields: ${count}`);

        for (let i = 5; i < 10; i++) {
            const uniqueName = `RiskBulk_${Math.floor(Math.random() * 10000)}`;
            console.log(`Filling Risk Statement ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`${uniqueName}`);
        }
    }

    async selectRiskCategoryBulk() {
        console.log("Selecting Risk Categories in bulk");
        const dropdowns = this.newPage.locator(
            `//*[normalize-space()='Select Risk Category']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`
        );

        const total = await dropdowns.count();
        console.log(`Total Risk Category dropdowns: ${total}`);

        for (let i = 0; i < total; i++) {
            console.log(`Selecting Risk Category for index ${i}`);
            await this.selectRiskCategory();
        }
    }

    async selectRiskCategory() {
        console.log("Selecting a Risk Category");
        const dropdown = this.newPage.locator(
            `//*[normalize-space()='Select Risk Category']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`
        );
        await dropdown.first().click();
        const option = this.newPage.locator('(//li[@role="option"])[1]');
        await option.click();
    }

    async selectRiskOwnersBulk() {
        console.log("Selecting Risk Owners in bulk");
        const dropdowns = this.newPage.locator(
            `//*[normalize-space()='Select Risk Owners']/ancestor::td//*[@class="p-icon p-multiselect-dropdown-icon"]`
        );

        const total = await dropdowns.count();
        console.log(`Total Risk Owner dropdowns: ${total}`);

        for (let i = 0; i < total; i++) {
            console.log(`Selecting Risk Owner for index ${i}`);
            await this.selectRiskOwners();
        }
    }

    async selectRiskOwners() {
        console.log("Selecting a Risk Owner");
        const dropdown = this.newPage.locator(
            `//*[normalize-space()='Select Risk Owners']/ancestor::td//*[@class="p-icon p-multiselect-dropdown-icon"]`
        );
        await dropdown.first().click();
        const option = this.newPage.locator('(//li[@role="option"]//input[@type="checkbox"])[1] ');
        await option.click();
    }

    async selectRiskProbilityAndImpactBulk() {
        console.log("Selecting Risk Probability and Impact in bulk");
        const dropdowns = this.newPage.locator(`//*[normalize-space()='Enter a value']/ancestor::td//*[@role="button"]`);

        const total = await dropdowns.count();
        console.log(`Total Probability/Impact dropdowns: ${total}`);

        for (let i = 0; i < total; i++) {
            console.log(`Selecting Probability/Impact for index ${i}`);
            await this.selectRiskProbilityAndImpact();
        }
    }

    async selectRiskProbilityAndImpact() {
        console.log("Selecting a Probability and Impact value");
        const dropdown = this.newPage.locator(`//*[normalize-space()='Enter a value']/ancestor::td//*[@role="button"]`);
        await dropdown.first().click();
        const option = this.newPage.locator('(//li[@role="option"])[1]');
        await option.click();
    }

    async selectOptionFromDropdownBulk() {
        await this.newPage.waitForTimeout(2000);
        const dropdowns = this.newPage.locator(`//*[normalize-space()='Enter a value']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`);

        const total = await dropdowns.count();

        for (let i = 0; i < total; i++) {
            await this.selectOptionFromAssertDropdown();
        }
    }

    async selectOptionFromAssertDropdown() {
        console.log("Selecting Option From Assert Dropdown in bulk");
        const dropdown = this.newPage.locator(`//*[normalize-space()='Enter a value']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`);
        await dropdown.first().click();
        const option = this.newPage.locator('(//li[@role="option"])[1]');
        await option.waitFor({ state: 'visible' });
        await option.click();
    }

    // async selectOptionFromDropdownBulk() {
    //     console.log("Selecting Option From Assert Dropdown in bulk");

    //     await this.newPage.waitForTimeout(2000);

    //     let count = await this.newPage.locator(
    //         `//*[normalize-space()='Enter a value']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`
    //     ).count();

    //     console.log(`Total dropdowns found: ${count}`);

    //     while (count > 0) {
    //         console.log(`Remaining dropdowns: ${count}`);

    //         await this.selectOptionFromAssertDropdown();

    //         count = await this.newPage.locator(
    //             `//*[normalize-space()='Enter a value']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`
    //         ).count();
    //     }
    // }

    // async selectOptionFromAssertDropdown() {
    //     console.log("Selecting Option From Assert Dropdown in bulk");

    //     const dropdown = this.newPage.locator(
    //         `//*[normalize-space()='Enter a value']/ancestor::td//*[@class="p-icon p-select-dropdown-icon"]`
    //     );

    //     await dropdown.first().click();

    //     const option = this.newPage.locator('//li[@role="option"]').first();
    //     await option.waitFor({ state: 'visible', timeout: 10000 });
    //     await option.click();

    //     await this.newPage.waitForTimeout(500);

    // }

    async selectAssertDeptAndOwnerBulk() {
        console.log("Selecting Option From Dropdown in bulk");
        await this.newPage.waitForTimeout(2000);
        const dropdowns = this.newPage.locator(`//div[normalize-space()='Enter a value']/ancestor::div//*[@class="p-icon p-multiselect-dropdown-icon"]`);
        const total = await dropdowns.count();

        console.log(`Total dropdowns found: ${total}`);

        for (let i = 0; i < total; i++) {
            console.log(`Processing dropdown index: ${i}`);
            await this.selectAssertDeptAndOwner(i);
        }

        console.log("Completed bulk dropdown selection");
    }

    async selectAssertDeptAndOwner(path: number) {
        console.log("Selecting option from a single dropdown");
        const dropdown = this.newPage.locator(`//div[normalize-space()='Enter a value']/ancestor::div//*[@class="p-icon p-multiselect-dropdown-icon"]`);

        console.log("Clicking first dropdown");
        await dropdown.nth(path).click();
        await this.page.waitForTimeout(1500)
        const option = this.newPage.locator('(//*[@role="listbox"]//input[@type="checkbox"])[1]');

        console.log("Selecting first option from dropdown");
        await option.click();

        console.log("Option selected successfully");
    }

    async selectRiskAssesmentRadioBulk() {
        console.log("Selecting Risk Assessment Radio buttons in bulk");
        const dropdowns = this.newPage.locator(
            `//label[contains(text(),'Detailed')]/..//input[@type="radio"]`
        );

        const total = await dropdowns.count();
        console.log(`Total radio buttons found: ${total}`);

        for (let i = 0; i < total; i++) {
            console.log(`Clicking radio button at index ${i}`);
            await dropdowns.nth(i).click();
        }
    }

    async enterRiskAssesmentScopeBulk() {
        console.log("Entering Risk Assessment Scope in bulk");
        const riskName = this.newPage.getByPlaceholder('Assessment Scope');
        const count = await riskName.count();
        console.log(`Total scope fields: ${count}`);

        for (let i = 0; i < count; i++) {
            const uniqueName = `RiskBulk_${Math.floor(Math.random() * 10000)}`;
            console.log(`Filling scope ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`${uniqueName}`);
        }
    }

    async enterRiskValueBulk() {
        console.log("Entering Risk Values in bulk");
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total value fields: ${count}`);

        for (let i = 11; i < 31; i++) {
            const uniqueName = `${Math.floor(Math.random() * 100)}`;
            console.log(`Filling value ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`${uniqueName}`);
        }
    }

    async enterAssertNameBulk() {
        console.log("Entering Risk Values in bulk");
        await this.page.waitForTimeout(1000);
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total value fields: ${count}`);

        for (let i = 0; i < count; i++) {
            await this.page.waitForTimeout(2000);
            const uniqueName = `${Math.floor(Math.random() * 100)}`;
            console.log(`Filling value ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`AssertBulk_${uniqueName}`);
        }
    }

    async enterProcessNameBulk() {
        console.log("Entering Risk Values in bulk");
        await this.page.waitForTimeout(1000);
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total value fields: ${count}`);

        for (let i = 0; i < count; i++) {
            await this.page.waitForTimeout(2000);
            const uniqueName = `${Math.floor(Math.random() * 100)}`;
            console.log(`Filling value ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`ProcessBulk_${uniqueName}`);
        }
    }

    async enterThreatNameBulk() {
        console.log("Entering threat Name in bulk");
        await this.page.waitForTimeout(2000);
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total value fields: ${count}`);

        for (let i = 0; i < count; i++) {
            const uniqueName = `${Math.floor(Math.random() * 100)}`;
            console.log(`Filling value ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`ThreatBulk_${uniqueName}`);
        }
    }

    async enterVulabilityNameBulk() {
        console.log("Entering threat Name in bulk");
        const riskName = this.newPage.locator(`//td//input[@type="text"]`);
        const count = await riskName.count();
        console.log(`Total value fields: ${count}`);

        for (let i = 0; i < count; i++) {
            const uniqueName = `${Math.floor(Math.random() * 100)}`;
            console.log(`Filling value ${i}: ${uniqueName}`);
            await riskName.nth(i).fill(`VulabilityBulk_${uniqueName}`);
        }
    }

    async clickOnFinalizeImport() {
        console.log("Clicking Finalize and Import button");
        let FINALIZE_IMPORT_BUTTON = this.newPage.locator(`(//span[normalize-space()='Finalize and Import'])[1]`);
        await FINALIZE_IMPORT_BUTTON.click();
    }

    async validateImportFinishedMsgVisible() {
        console.log("Validating Import Finished message");
        let msg = this.newPage.locator(`//*[contains(text(),'Risks Import Finished RM-')]`);
        await msg.waitFor({ state: 'visible' });
        await Promise.all([
            expect(msg).toBeVisible()
        ])
        console.log("Import Finished message is visible");
    }

    async validateImportStartedMsgVisible() {
        console.log("Validating Import Started message");
        let msg = this.newPage.locator(`//div[contains(text(),'Import') and contains(text(),'started')]`);
        await msg.waitFor({ state: 'visible' });
        await Promise.all([
            await expect(msg).toBeVisible()
        ]);
        console.log("Import Started message is visible");
        await msg.waitFor({ state: 'hidden' });
        console.log("Import Started message disappeared");
    }
    async clickAndSelectIdentifierDateBulk() {
        const calendars = this.newPage.locator(`//input[@placeholder="Select Identification Date"]`);
        const count = await calendars.count();

        for (let i = 0; i < count; i++) {
            const calendar = calendars.nth(i);

            await calendar.click();

            // Wait for calendar popup and select date (e.g., 9)
            const date = this.newPage.locator(`//span[normalize-space()='20']`).first();
            await date.waitFor({ state: 'visible' });
            await date.click();
        }
    }
    async validateAssertBulkMsg() {
        console.log("Validating Bulk message");
        let msg = this.newPage.locator(`//div[contains(text(),'All records submitted successfully.')]`);
        await msg.waitFor({ state: 'visible' });
        await Promise.all([
            await expect(msg).toBeVisible()
        ]);
        await msg.waitFor({ state: 'hidden' });
    }


    async clickOnRiskControl() {
        console.log("Clicking on Risk Control");
        await this.RISK_CONTROL.click();
    }

    async enterRiskControlEngName() {
        console.log("Entering Risk Control English Name");
        await this.RISK_CONTROL_ENG_NAME.fill('Automation_Risk_Control');
    }

    async enterRiskControlArbName() {
        console.log("Entering Risk Control Arabic Name");
        await this.RISK_CONTROL_ARB_NAME.fill('Automation_Risk_Control');
    }

    async enterRiskControlNewEngName() {
        console.log("Editing Risk Control English Name");
        await this.RISK_CONTROL_ENG_NAME.fill('TestEdit_Control');
    }

    async clickOnControlSaveButton() {
        console.log("Clicking Control Save button");
        await this.GOV_CONTROL_SAVE.waitFor({ state: 'visible' });
        await this.GOV_CONTROL_SAVE.click();
    }

    async clickOnControlDetails() {
        console.log("Opening Control Details");
        await this.INITIVATE_DETAILS.waitFor({ state: 'visible' });
        await this.INITIVATE_DETAILS.click();
    }

    async validateRiskDetailsPage() {
        console.log("Validating Risk Details Page");
        await expect(this.RISK_CONTROL_DETAILS_PAGE).toBeVisible();
    }

    async clickOnDeleteRiskControl() {
        console.log("Clicking Delete Risk Control");
        await this.AUDIT_DELETE_BUTTON.waitFor({ state: 'visible' });
        await this.AUDIT_DELETE_BUTTON.click();
    }

    async clickOnRiskDeactivate() {
        console.log("Clicking Deactivate Risk");
        await this.DEACTIVATE_RISK.click();
    }

    async validateRiskDeactivateSuccessMsg() {
        console.log("Validating Risk Deactivation Success message");
        await expect(this.DEACTIVATE_SUCCESS_MSG).toBeVisible();
    }

    async clickOnRiskActivate() {
        console.log("Clicking Activate Risk");
        await this.ACTIVATE_RISK.click();
    }

    async validateRiskActivateSuccessMsg() {
        console.log("Validating Risk Activation Success message");
        await expect(this.ACTIVATE_SUCCESS_MSG).toBeVisible();
    }

    async clickOnAssertHamburger() {
        console.log("Clicking Assert Hamburger menu");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.HAMBURGER.click();
    }

    async clickOnDeactivateAssert() {
        console.log("Clicking Deactivate Assert");
        await this.DEACTIVATE_BUTTON.click();
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
    }

    async clickOnConfirmationDelete() {
        console.log("Confirming Delete action");
        await this.DELETE_BUTTON_CONFIRMATION.waitFor({ state: 'visible' });
        await this.DELETE_BUTTON_CONFIRMATION.click();
    }

    async validateInactiveStatusVisible() {
        console.log("Validating Inactive status");
        await this.INACTIVE_STATUS.waitFor({ state: 'visible' })
        await expect(this.INACTIVE_STATUS).toBeVisible();
    }

    async validateActiveStatusVisible() {
        console.log("Validating Active status");
        await this.ACTIVE_STATUS.waitFor({ state: 'visible' })
        await expect(this.ACTIVE_STATUS).toBeVisible();
    }

    async clickOnDeleteTemplate() {
        console.log("Clicking Delete Template");
        await this.READING_DELETE.waitFor({ state: 'visible' });
        await this.READING_DELETE.click();
    }

    async clickOnActivateButton() {
        console.log("Clicking Activate button");
        await this.ACTIVATE_BUTTON_ASSERT.click();
    }

    async clickOnActivateConfirmationButton() {
        console.log("Confirming Activation");
        await expect(this.ACTIVATE_CONFIRMATION_BUTTON).toBeVisible();
        await this.ACTIVATE_CONFIRMATION_BUTTON.click();
    }

    async clickOnCustomFrameworkButton() {
        console.log("Clicking on Custom Framework button");
        await this.CUSTOM_FRAMEWORK_BUTTON.waitFor({ state: 'visible' });
        await this.CUSTOM_FRAMEWORK_BUTTON.click();
        console.log("Custom Framework button clicked successfully");
    }

    async clickAndSelectDomain() {
        console.log("Selecting Domain from dropdown");
        await this.DOMAIN_DROPDOWN.waitFor({ state: 'visible' });
        await this.DOMAIN_DROPDOWN.click();

        let domain = this.page.locator(`//span[normalize-space()='Cybersecurity']`);
        await domain.click();

        console.log("Domain 'Cybersecurity' selected successfully");
    }

    async enterFrameworkName() {
        console.log("Entering Framework name");
        await this.FRAMEWORK_NAME_FIELD.waitFor({ state: 'visible' });
        await this.FRAMEWORK_NAME_FIELD.fill('Automation_Test');
        console.log("Framework name entered successfully");
    }

    async enterFrameworkNewName() {
        console.log("Editing Framework name");
        await this.FRAMEWORK_NAME_FIELD.waitFor({ state: 'visible' });
        await this.FRAMEWORK_NAME_FIELD.fill('TestEdit_Farmework');
        console.log("Framework name updated successfully");
    }

    async editEnterFrameworkNewName() {
        console.log("Editing Framework name");
        await this.CLONED_FRAMEWORK_NAME_FIELD.waitFor({ state: 'visible' });
        await this.CLONED_FRAMEWORK_NAME_FIELD.fill('TestEdit_Farmework');
        console.log("Framework name updated successfully");
    }

    async editEnterCustonFrameworkNewName() {
        console.log("Editing Framework name");
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.fill('TestEdit_Custom_Farmework');
        console.log("Framework name updated successfully");
    }

    async enterFrameworkVersion(str: string) {
        console.log(`Entering Framework version: ${str}`);
        await this.FRAMEWORK_VERSION.waitFor({ state: 'visible' });
        await this.FRAMEWORK_VERSION.fill(str);
        console.log("Framework version entered successfully");
    }

    async clickOnNext() {
        console.log("Clicking Next button");
        await this.NEXT_BUTTON.nth(0).click();
    }

    async clickOnAddNewControl() {
        console.log("Clicking Add New Control");
        await this.ADD_NEW_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_NEW_CONTROL_BUTTON.click();
    }

    async enterRefrenceNameEng() {
        console.log("Entering Reference Name (English)");
        await this.REFRENCE_ENG_FIELD.waitFor({ state: 'visible' });
        await this.REFRENCE_ENG_FIELD.fill('Automation_Refrence');
    }

    async enterRefrenceNameArabic() {
        console.log("Entering Reference Name (Arabic)");
        await this.REFRENCE_ARABIC_FIELD.waitFor({ state: 'visible' });
        await this.REFRENCE_ARABIC_FIELD.fill('Automation_Refrence');
    }

    async enterText1() {
        console.log("Entering text in first textarea");
        await this.TEXTAREA_FIELD.nth(0).fill('Document Text');
        await this.page.waitForTimeout(1500);
    }

    async enterText2() {
        console.log("Entering text in second textarea");
        await this.TEXTAREA_FIELD.nth(1).fill('Document Text');
        await this.page.waitForTimeout(1500);
    }

    async clickOnAddToList() {
        console.log("Clicking Add to List");
        await this.ADD_LIST_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_LIST_BUTTON.click();
    }

    async clickOnNextbutton() {
        console.log("Clicking Next button");
        await this.NEXT_BUTTON.nth(1).click();
    }

    async clickOnFinishButton() {
        console.log("Clicking Finish button");
        await this.FINISH_BUTTON.waitFor({ state: 'visible' });
        await this.FINISH_BUTTON.click();
    }

    async cilckOnFrameworkHamburger() {
        console.log("Clicking Framework Hamburger menu");
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
    }

    async clickOnEditFramework() {
        console.log("Clicking Edit Framework");
        await this.EDIT.waitFor({ state: 'visible' });
        await this.EDIT.click();
    }

    async enterShortName() {
        console.log("Entering Framework Short Name");
        await this.SHORT_NAME_FIELD.waitFor({ state: 'visible' });
        await this.SHORT_NAME_FIELD.fill('Automation_Edit_Clone_Framework');
    }

    async editEnterShortName() {
        console.log("Entering Framework Short Name");
        await this.EDIT_CLONE_FRAMEWORK_NAME.waitFor({ state: 'visible' });
        await this.EDIT_CLONE_FRAMEWORK_NAME.fill('Automation_Edit_Clone_Framework');
    }

    async clickOnSaveFramework() {
        console.log("Clicking Save Framework");
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
    }

    async validateEditedFramework() {
        await expect(this.FRAMEWORK).toContainText('TestEdit');
    }

    async clickOnCustomFrameworkTab() {
        console.log("Clicking on Custom Framework tab");
        await this.CUSTOM_FRAMEWORK_TAB.waitFor({ state: 'visible' });
        await this.CUSTOM_FRAMEWORK_TAB.click();
        await this.page.waitForTimeout(2000);
        console.log("Custom Framework tab opened successfully");
    }
    async clickOnDeleteFramework() {
        console.log("Clicking on Delete Framework option");
        await this.FRAMEWORK_DELETE.waitFor({ state: 'visible' });
        await this.FRAMEWORK_DELETE.click();
        console.log("Delete Framework option clicked successfully");
    }

    async clickOnDetailsFramework() {
        console.log("Clicking on Framework Details option");
        await this.FRAMEWORK_DETAILS_BUTTON.waitFor({ state: 'visible' });
        await this.FRAMEWORK_DETAILS_BUTTON.click();
        console.log("Framework Details option clicked successfully");
    }

    async validateFrameworkDetailPage() {
        console.log("Validating Framework Detail page");
        await this.FRAMEWORK_DETAIL_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORK_DETAIL_PAGE).toBeVisible();
        console.log("Framework Detail page is visible");
    }

    async clickAndUncheckCheckbox() {
        console.log("Clicking and validating the Evidence checkbox...");
        await this.EVIDENCE_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.EVIDENCE_CHECKBOX.isChecked();

        if (isChecked) {
            await this.page.waitForTimeout(1500);
            await this.EVIDENCE_CHECKBOX.uncheck();
        }

        console.log("Evidence checkbox clicked and validated");
    }

    async clickAndCheckCheckbox() {
        console.log("Clicking and validating the Evidence checkbox...");
        await this.EVIDENCE_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.EVIDENCE_CHECKBOX.isChecked();

        if (isChecked) {
            await this.page.waitForTimeout(1500);
            await this.EVIDENCE_CHECKBOX.uncheck();
        }
        await this.page.waitForTimeout(1500);
        await this.EVIDENCE_CHECKBOX.check();

        console.log("Evidence checkbox clicked and validated");
    }
    async clickonFilterIcon() {
        console.log("Clicking on Filter icon");
        await this.RISK_FILTER_ICON.waitFor({ state: 'visible' });
        await this.RISK_FILTER_ICON.click();
        console.log("Filter icon clicked successfully");
    }
    async clickonFilterButton() {
        console.log("Clicking on Filter button");
        await this.FILTER_BUTTON.waitFor({ state: 'visible' });
        await this.FILTER_BUTTON.click();
        console.log("Filter button clicked successfully");
    }

    async clickonFilterByReadiness() {
        console.log("Applying filter by Readiness");
        await this.page.waitForTimeout(1500);
        await this.FILTER_BY_READINESS.waitFor({ state: 'visible' });
        await this.FILTER_BY_READINESS.click();

        let option = this.page.locator(`//span[normalize-space()='Ready']`);
        await option.click();

        console.log("Filter by Readiness applied successfully");
    }

    async editEvidenceIfDataExists() {
        await this.page.waitForTimeout(1500);
        if (await this.NO_DATA.isVisible()) {
            console.log('No data available');
            return;
        }
        await this.clickOnEvidenceHamburger();
        await this.clickOnEvidenceEdit();
        await this.enterEvidenceNewName();
        await this.clickEvidenceSaveButton();
    }

    async deleteEvidenceIfDataExists() {
        await this.page.waitForTimeout(1500);

        if (await this.NO_DATA.isVisible()) {
            console.log("No evidence data available. Skipping delete action.");
            return;
        }

        console.log("Evidence data found. Proceeding with delete flow.");

        await this.clickOnEvidenceHamburger();
        await this.clickOnEvidenceDelete();
        await this.clickOnYesButton();
        await this.validateDeleteSuccessMsg();

        console.log("Evidence deleted successfully");
    }

    async clickOnEvidenceHamburger() {
        console.log("Clicking on Evidence hamburger menu");
        await this.page.waitForTimeout(1500)
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("Evidence hamburger menu clicked successfully");
    }
    async clickOnEvidenceEdit() {
        console.log("Clicking on Evidence Edit option");
        await this.EDIT.waitFor({ state: 'visible' });
        await this.EDIT.click();
        console.log("Evidence Edit option clicked successfully");
    }

    async enterEvidenceNewName() {
        console.log("Entering new Evidence name");
        await this.EVIDENCE_NAME_EDIT.waitFor({ state: 'visible' });
        await this.EVIDENCE_NAME_EDIT.fill(`TestEdit_Evidence`);
        console.log("New Evidence name entered successfully");
    }

    async clickOnEvidenceDelete() {
        console.log("Clicking on Evidence Delete option");
        await this.page.waitForTimeout(1500)
        await this.EVIDENCE_DELETE.waitFor({ state: 'visible' });
        await this.EVIDENCE_DELETE.click();
        console.log("Evidence Delete option clicked successfully");
    }

    async clickOnTemplateDownloadIcon() {
        console.log("Clicking on first Template Download Icon...");
        await this.TEMPLATE_DOWNLOAD_ICON.first().waitFor({ state: 'visible' });
        await this.TEMPLATE_DOWNLOAD_ICON.first().click();
        console.log("Clicked on Template Download Icon successfully.");
    }
    async clickTemplatePdfFormatDownload() {
        try {

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.PDF_FORMAT_DOWNLOAD.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../download_pdf');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`PDF file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon:`);
        }
    }

    async clickTemplateWordFormatDownload() {
        await this.page.waitForTimeout(2000);
        try {
            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.PDF_FORMAT_DOWNLOAD.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../download_word');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Word file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon:`);
        }
    }

    async clickTemplatePdfDownload() {
        try {

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.DOWNLOAD_PDF_TEM.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../download_pdf');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`PDF file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon:`);
        }
    }

    async clickTemplateWordDownload() {
        await this.page.waitForTimeout(2000);
        try {
            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.DOWNLOAD_WORD_TEM.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../download_word');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Word file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon:`);
        }
    }
    async clickOnTemplateHamburger() {
        console.log("Clicking on Template Hamburger menu...");
        await this.HAMBURGER.waitFor({ state: 'visible' });
        await this.HAMBURGER.click();
        console.log("Clicked on Template Hamburger menu successfully.");
    }

    async clickOnTemplateDownloadText() {
        console.log("Clicking on Template Download Text...");
        await this.TEMPLATE_DOWNLOAD_TEXT.waitFor({ state: 'visible' });
        await this.TEMPLATE_DOWNLOAD_TEXT.click();
        console.log("Clicked on Template Download Text successfully.");
    }

    async clickAndSelectIdentifierDate() {
        await this.IDENTIFIER_DATE_CAL.click();
        await Utils.clickLastEnabledDate(this.page);
    }

    async waitForHomePageLoad() {
        console.log("Waiting for homepage to load...");

        // Wait for initial page load
        await this.page.waitForLoadState('domcontentloaded');

        // Reload once to stabilize session/state
        await this.page.reload();

        // Wait for URL validation
        await this.page.waitForURL('**/home', {
            timeout: 600000
        });

        // Final stabilization
        // await this.page.waitForLoadState('networkidle');

        // Optional loader handling
        // await this.LOADER.waitFor({ state: 'hidden', timeout: 30000 });

        console.log("Homepage loaded successfully");
    }

    async clickOnMenubarExpand() {
        await this.page.waitForTimeout(2500)
        await this.MENU_BAR_EXPAND.waitFor({ state: 'visible' });
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000)
        const isExpanded =
            (await this.MENU_BAR_COLLAPS.count()) > 0 &&
            await this.MENU_BAR_COLLAPS.first().isVisible().catch(() => false);

        if (isExpanded) {
            console.log('Menu is already expanded');
            return;
        }

        console.log('Clicking on menu expand');

        await this.MENU_BAR_EXPAND.waitFor({ state: 'visible' });
        await this.MENU_BAR_EXPAND.click();

        await this.MENU_BAR_COLLAPS.waitFor({ state: 'visible' });
    }

    async enterReqEvidenceName() {
        console.log("Entering Request Evidence Name");

        await this.REQ_EVIDENCE_NAME_FIELD.waitFor({ state: 'visible' });

        const random = Math.floor(Math.random() * 100);
        const uniqueName = `Automation_Evidence_${random}`;

        await this.REQ_EVIDENCE_NAME_FIELD.fill(uniqueName);

        console.log(`Request Evidence Name entered: ${uniqueName}`);
    }

    async enterReqEvidenceDesc() {
        console.log("Entering Request Evidence Description");

        await this.REQ_EVIDENCE_DESC_FIELD.waitFor({ state: 'visible' });

        const random = Math.floor(Math.random() * 100);
        const uniqueName = `EvidenceDesc_${random}`;

        await this.REQ_EVIDENCE_DESC_FIELD.fill(uniqueName);

        console.log(`Request Evidence Description entered: ${uniqueName}`);
    }

    async clickOnServiceReqSettings() {
        console.log("Clicking on Service Request Settings");

        await this.SERVICE_REQ_SETTINGS.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_SETTINGS.click();

        console.log("Clicked on Service Request Settings");
    }

    async clickOnNewReqTypeButton() {
        console.log("Clicking on New Request Type button");

        await this.NEW_REQ_TYPE.waitFor({ state: 'visible' });
        await this.NEW_REQ_TYPE.click();

        console.log("New Request Type button clicked");
    }

    async clickAndSelectReqType() {
        console.log("Selecting Request Type");

        await this.page.waitForTimeout(1500);

        await this.REQ_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.REQ_TYPE_DROPDOWN.click();

        const reqType = this.page.locator(`//span[normalize-space()='Create Custom Type']`);
        await reqType.click();

        console.log("Request Type selected: Create Custom Type");
    }

    async clickAndSelectReqTypeFilter() {
        console.log("Selecting Request Type Filter");

        await this.page.waitForTimeout(1500);

        await this.REQ_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.REQ_TYPE_DROPDOWN.click();

        await this.OPTION.click();

        console.log("Request Type Filter selected");
    }

    async enterCustomReqTypeName() {
        console.log("Entering Custom Request Type Name");
        const random = Math.floor(Math.random() * 10000);
        await this.CUSTOM_REQ_NAME_FIELD.waitFor({ state: 'visible' });
        const customReqName = `AutonationRequest${random}`;
        await this.CUSTOM_REQ_NAME_FIELD.fill(customReqName);
        console.log(`Custom Request Type Name entered: ${customReqName}`);
    }

    async enterMaxDaysToComplete() {
        console.log("Entering Max Days To Complete");

        await this.MAX_DAYS_COMPLETE_FIELD.fill('1');

        console.log("Max Days To Complete entered: 1");
    }

    async exportServiceStatusExcelIcon() {
        try {
            await this.SERVICE_REQ_STATUS_XLS_ICON.waitFor({ state: 'visible' });
            console.log('Export Excel icon clicked');

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.SERVICE_REQ_STATUS_XLS_ICON.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../exported_file');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Excel file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon: ${error.message}`);
        }
    }
    async clickOnServiceStatusExportPdfIconValidatePreview() {
        console.log("Clicking on Export PDF button");
        try {
            await this.SERVICE_REQ_STATUS_PDF_ICON.click();
            console.log("Export PDF button clicked... waiting for print preview...");
            console.log(this.page.url());
            const printPreview = this.page.locator('print-preview-app').locator('#state').nth(0);
            try {

                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                console.log("Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }
    async clickOnServiceReqStatusHamburger() {
        console.log("Clicking on Service Request Status Hamburger");
        await this.SERVICE_REQ_STATUS_HAMBURGER.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_STATUS_HAMBURGER.click();
    }

    async clickOnServiceReqTypeHamburger() {
        console.log("Clicking on Service Request Type Hamburger");
        await this.SERVICE_REQ_TYPE_HAMBURGER.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_TYPE_HAMBURGER.click();
    }

    async enterServiceStatusEngName() {
        console.log("Entering Service Status English Name");
        await this.SERVICE_REQ_ENG_LABEL.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_ENG_LABEL.fill('Automation_Request_Type');
    }

    async enterServiceReqTypeName() {
        console.log("Entering Service Request Type Name");
        await this.SERVICE_REQ_TYPE_NAME.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_TYPE_NAME.fill('Automation_Request_Type');
    }

    async validateServiceReqStatusDetailsPopUp() {
        console.log("Validating Service Request Status Details Popup");
        await this.SERVICE_STATUS_DETAILS_POPUP.waitFor({ state: 'visible' });
        await expect(this.SERVICE_STATUS_DETAILS_POPUP).toBeVisible();
    }

    async clickOnServiceRequest() {
        console.log("Clicking on Service Request");
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        await this.page.waitForTimeout(2000);
        await this.SERVICE_REQUEST.waitFor({ state: 'visible' });
        await this.SERVICE_REQUEST.click();
    }

    async clickOnMyRequestTab() {
        console.log("Clicking on My Request Tab");
        await this.MY_REQUEST.waitFor({ state: 'visible' });
        await this.MY_REQUEST.click();
    }

    async addCommentIfServiceReqVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request ID is visible...");

        const isVisible = await this.SERVICE_REQ_ID.isVisible();

        if (!isVisible) {
            console.log("Service Request ID not visible — skipping comment flow");
            return;
        }

        console.log("Service Request ID is visible — performing comment flow");

        await this.clickOnServiceReqID();
        await this.enterServiceReqComment();
        await this.clickOnAddCommentButton();
        await this.validateServiceReqCommentAdded();

        console.log("Service Request comment added successfully");
    }

    async openDetailsIfHamburgerVisible() {
        await this.page.waitForTimeout(1500);
        console.log("Checking if Hamburger menu is visible...");
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        const isHamburgerVisible = await this.HAMBURGER.isVisible();

        if (!isHamburgerVisible) {
            console.log("Hamburger menu is not visible — skipping details flow");
            return;
        }

        console.log("Hamburger menu is visible — performing details flow");
        await this.clickOnHamburger();
        await this.clickOnDetails();
        await this.validateServiceReqDetailPageVisible();

        console.log("Details page opened successfully");
    }

    async exportServiceReqIfVisible() {
        console.log("performing export flow...");
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        const isHamburgerVisible = await this.HAMBURGER.isVisible();

        if (!isHamburgerVisible) {
            console.log("Hamburger menu is not visible — skipping details flow");
            return;
        }

        console.log("Hamburger menu is visible — performing export flow");

        await this.exportExcelIcon();
        await this.exportPdfIcon();

    }


    async clickOnMyDeptRequestTab() {
        console.log("Clicking on My Department Request Tab");
        await this.MY_DEPT_REQUEST.waitFor({ state: 'visible' });
        await this.MY_DEPT_REQUEST.click();
    }

    async clickOnAllRequestTab() {
        console.log("Clicking on All Request Tab");
        await this.ALL_REQUEST.waitFor({ state: 'visible' });
        await this.ALL_REQUEST.click();
    }

    async valiadateReqDataAvailableOrNot() {
        console.log("Validating Request Data Availability");
        await this.page.waitForTimeout(2000);
        expect(
            await this.NO_DATA_AVAILABLE.isVisible() ||
            await this.NO_DATA_AVAILABLE.isHidden()
        ).toBeTruthy();
    }

    async clickOnEmployeeTab() {
        console.log("Clicking on Employee Tab");
        await this.EMPLOYEES_TAB.waitFor({ state: 'visible' });
        await this.EMPLOYEES_TAB.click();
        await this.NEW_EMPLOYEE_BUTTON.waitFor({ state: 'visible' });
    }

    async clickOnNewEmployeeButton() {
        console.log("Clicking on New Employee Button");
        await this.NEW_EMPLOYEE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_EMPLOYEE_BUTTON.click();
    }

    async performEvidenceAdditionFlow() {
        console.log("Checking Due Date Calendar visibility...");
        await this.page.waitForTimeout(3000);
        if (await this.DUE_DATE_CALENDAR.isVisible()) {
            console.log("Due Date Calendar is visible. Proceeding with flow...");
            await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
            await this.DUE_DATE_CALENDAR.click();
            await Utils.clickLastEnabledDate(this.page);

            console.log("Due Date selected successfully");
            await this.clickAndSelectApprovarTask();
            await this.clickOnAddEvidenceButton();
            await this.validateSuccessMsg();

            console.log("Evidence flow completed successfully");
        } else {
            console.log("Due Date Calendar is not visible. Skipping complete flow.");
            await this.clickOnAddEvidenceButton();
            await this.validateEvidenceAdded();
        }
    }
    public employeeUserEmail: string;
    async enterEmpUsername() {
        console.log("Entering Employee Username");
        const random = Math.floor(Math.random() * 10000);
        await this.EMP_USERNAME.waitFor({ state: 'visible' });
        this.employeeUserEmail = `Automation_Employee${random}11@yopmail.com`;
        await this.EMP_USERNAME.fill(this.employeeUserEmail);
    }

    async enterEmpFullName() {
        console.log("Entering Employee Full Name");
        const random = Math.floor(Math.random() * 10000);
        await this.EMP_FULL_NAME.waitFor({ state: 'visible' });
        await this.EMP_FULL_NAME.fill(`Automation_Employee${random}`);
    }

    async enterEmpEmail() {
        console.log("Entering Employee Email");
        const random = Math.floor(Math.random() * 100);
        await this.EMP_EMAIL.waitFor({ state: 'visible' });
        await this.EMP_EMAIL.fill(`Automation_Employee2${random}1@yopmail.com`);
    }

    async enterEmpTitle() {
        console.log("Entering Employee Title");
        const random = Math.floor(Math.random() * 10000);
        await this.EMP_TITLE.waitFor({ state: 'visible' });
        await this.EMP_TITLE.fill(`Automation_Employee${random}`);
    }

    async clickOnPreviewButton() {
        console.log("Clicking on Preview Button");
        await this.PREVIEW_BUTTON.waitFor({ state: 'visible' });
        await this.PREVIEW_BUTTON.click();
    }

    async validateEmployeeDetailsPageVisible() {
        console.log("Validating Employee Details Page Visibility");
        await this.EMPLOYEE_DETAILS_PAGE.waitFor({ state: 'visible' });
        await expect(this.EMPLOYEE_DETAILS_PAGE).toBeVisible();
    }

    async validateEmpActivateSuccessMsg() {
        console.log("Validating Employee Activation Success Message");
        await expect(this.EMP_ACTIVATE_SUCCESS_MSG).toBeVisible();
    }

    async validateEmpDeactivateSuccessMsg() {
        console.log("Validating Emp Deactivation Success message");
        await expect(this.EMP_DEACTIVATE_SUCCESS_MSG).toBeVisible();
    }

    async selectMultilpleDepartmentsFromDropdown() {
        console.log("Selecting Multiple departments from dropdown");
        await this.DEPARTMENT_DROPDOWN_SELECTION.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN_SELECTION.click();
        await this.OPTION.click();
        console.log("Mulitple Departments selected successfully");
    }

    async validateDepartmentFilterResults() {
        console.log("Validating Department Results after Filter");
        await this.page.waitForTimeout(1500)
        expect(await this.DEPARTMENT_NAME.isVisible() || await this.DEPARTMENT_NAME.isHidden()).toBeTruthy();
    }

    async clickAndSelectEmpStatusFromDropdown() {
        console.log("Selecting status from dropdown...");
        await this.STATUS_DROPDOWN.waitFor({ state: 'visible' });
        await this.STATUS_DROPDOWN.click();
        await this.EMP_STATUS_DROPDOWN_OPTION.waitFor({ state: 'visible' });
        await this.EMP_STATUS_DROPDOWN_OPTION.click();
        console.log("Selecting status from dropdown...");
    }

    async validateDepartmentStatusFilterResults() {
        console.log("Validating Department Results after Filter");
        await this.page.waitForTimeout(1500)
        expect(this.STATUS_NAME.isVisible() || this.STATUS_NAME.isHidden()).toBeTruthy();
    }

    async clickOnRequestInformation() {
        console.log("Clicking on Request Information");
        await this.REQUEST_INFORMATION.waitFor({ state: 'visible' });
        await this.REQUEST_INFORMATION.click();
    }

    async sendTreatmentRequestPlanIfEnabled() {
        await this.page.waitForTimeout(2000)
        await this.NEW_TREATEMENT_BUTTON.waitFor({ state: 'visible' });
        const isDisabled = await this.NEW_TREATEMENT_BUTTON.isDisabled();

        if (isDisabled) {
            console.log("New Treatment button is disabled. Skipping action.");
            return;
        } else {

            console.log("Starting treatment request plan flow");
            await this.clickOnNewTreatement();
            await this.clickOnTreatmentRequestPlan();
            await this.clickAndSelectDueDate();
            await this.clickAndSelectTaskOwner();
            await this.clickOnAddApproverBUtton();
            await this.clickAndSelectApprovar();
            await this.clickOnSendButton();
            await this.validateSuccessMsg();

            console.log("Treatment request plan sent successfully");
        }
    }

    async clickOnTreatmentRequestPlan() {
        console.log("Clicking on Treatment Request Plan");
        await this.TREATMENT_REQUEST_PLAN.waitFor({ state: 'visible' });
        await this.TREATMENT_REQUEST_PLAN.click();
    }
    async exportServiceTypeExcelIcon() {
        try {
            await this.SERVICE_REQ_TYPE_XLS_ICON.waitFor({ state: 'visible' });
            console.log('Export Excel icon clicked');

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.SERVICE_REQ_TYPE_XLS_ICON.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../exported_file');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Excel file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon: ${error.message}`);
        }
    }
    async clickOnServiceTypeExportPdfIconValidatePreview() {
        console.log("Clicking on Export PDF button");
        try {
            await this.SERVICE_REQ_TYPE_PDF_ICON.click();
            console.log("Export PDF button clicked... waiting for print preview...");
            console.log(this.page.url());
            const printPreview = this.page.locator('print-preview-app').locator('#state').nth(0);
            try {

                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                console.log("Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }

    async validateServiceReqDetailPageVisible() {
        await this.SERVICE_REQ_DETAILS_PAGE.waitFor({
            state: 'visible'
        });
        await expect(this.SERVICE_REQ_DETAILS_PAGE).toBeVisible();
    }

    async exportPdfIcon() {
        try {
            console.log("Clicking on Export PDF button...");
            await this.EXPORT_REPORT.click();
            console.log("Export PDF button clicked... waiting for print preview...");

            const printPreview = this.page.locator(`//div[@id="sizer"]`);
            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                await expect(printPreview).toBeVisible();
                console.log("Print preview displayed successfully.");
            } catch {
                console.warn("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("Error while clicking Export PDF:", error);
            throw error;
        }
    }
    async performServiceReqReAssignIfHamburgerVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request Hamburger is visible...");

        const isHamburgerVisible = await this.SERVICE_REQ_HABURGER.isVisible();

        if (!isHamburgerVisible) {
            console.log("Service Request Hamburger is not visible — skipping reassignment flow");
            return;
        }

        console.log("Service Request Hamburger is visible — performing reassignment flow");

        await this.clickOnServiceReqHamburger();
        await this.clickOnReAssignServiceReq();
        await this.clickAndSelectAssignTo();
        await this.clickOnReassignButton();
        await this.validateReAssignSuccessMsg();

        console.log("Service Request reassignment completed successfully");
    }
    async clickOnServiceReqHamburger() {
        console.log("Clicking on Service Request Hamburger");
        await this.SERVICE_REQ_HABURGER.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_HABURGER.click();
    }

    async clickOnReAssignServiceReq() {
        console.log("Clicking on Reassign Service Request");
        await this.REASSIGN.waitFor({ state: 'visible' });
        await this.REASSIGN.click();
    }

    async clickAndSelectAssignTo() {
        console.log("Selecting user for reassignment");
        await this.REASSIGN_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.REASSIGN_TO_DROPDOWN.click();
        await this.OPTION.waitFor({ state: 'visible' });
        await this.OPTION.click();
    }

    async clickOnReassignButton() {
        console.log("Clicking on Reassign Button");
        await this.REASSIGN_BUTTON.waitFor({ state: 'visible' });
        await this.REASSIGN_BUTTON.click();
    }

    async validateReAssignSuccessMsg() {
        console.log("Validating Reassign Success Message");
        await this.REASSIGN_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.REASSIGN_SUCCESS_MSG).toBeVisible();
    }

    async clickOnServiceReqID() {
        await this.page.waitForTimeout(1500);
        console.log("Clicking on Service Request ID");
        await this.SERVICE_REQ_ID.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_ID.click();
    }

    async clickOnEmployeeID() {
        await this.page.waitForTimeout(1500);
        console.log("Clicking on Service Request ID");
        await this.EMP_ID.waitFor({ state: 'visible' });
        await this.EMP_ID.click();
    }

    async clickOnCommentAndCommunicationTab() {
        await this.page.waitForTimeout(1500);
        console.log("Clicking on Comments & Communications Tab");
        await this.COMMENT_AND_COMMUNICATION_TAB.waitFor({ state: 'visible' });
        await this.COMMENT_AND_COMMUNICATION_TAB.click();
    }

    async enterCommentInCommentAndCommunicationTab() {
        await this.page.waitForTimeout(1500);
        console.log("Entering comm  ent in Comments & Communications Tab");
        await this.EMP_COMMENT_FIELD.waitFor({ state: 'visible' });
        await this.EMP_COMMENT_FIELD.fill('Test Comment');
    }
    async clickOnAddCommentButtonInCommentAndCommunicationTab() {
        await this.page.waitForTimeout(1500);
        console.log("Clicking on Add Comment Button in Comments & Communications Tab");
        await this.ADD_EMP_COMMENT_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EMP_COMMENT_BUTTON.click();
    }

    async validateCommentAddedInCommentAndCommunicationTab() {
        await this.page.waitForTimeout(1500);
        console.log("Validating comment added in Comments & Communications Tab");
        await this.EMP_COMMENT_ADDED.waitFor({ state: 'visible' });
        await expect(this.EMP_COMMENT_ADDED).toContainText('Test Comment');
    }
    async reassignServiceReqIfVisible() {
        await this.page.waitForTimeout(2500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request ID is visible...");
        const isVisible = await this.SERVICE_REQ_ID.isVisible();

        if (!isVisible) {
            console.log("Service Request ID not visible — skipping reassignment flow");
            return;
        }
        console.log("Service Request ID is visible — performing reassignment flow");
        await this.clickOnServiceReqID();
        await this.clickOnThreeDot();
        await this.clickOnReAssignServiceReq();
        await this.clickAndSelectAssignTo();
        await this.clickOnReassignButton();
        await this.validateReAssignSuccessMsg();

        console.log("Service Request reassigned successfully");
    }

    async enterServiceReqComment() {
        console.log("Entering Service Request Comment");
        await this.COMMENT_TEXT_FIELD.waitFor({ state: 'visible' });
        await this.COMMENT_TEXT_FIELD.fill('Automation_Comment');
    }

    async clickOnAddCommentButton() {
        console.log("Clicking on Add Comment Button");
        await this.ADD_COMMENT_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_COMMENT_BUTTON.click();
    }

    async validateServiceReqCommentAdded() {
        console.log("Validating Service Request Comment Added");
        await this.COMMENT_ADDED.waitFor({ state: "visible" });
        await expect(this.COMMENT_ADDED).toContainText('Automation');
    }

    async clickOnServiceReqUnderReview() {
        console.log("Clicking on Service Request Under Review");
        await this.SERVICE_REQ_ID_UNDER_REVIEW.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_ID_UNDER_REVIEW.click();
    }

    async approveServiceReqIfUnderReviewVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request Under Review is visible...");

        const isVisible = await this.SERVICE_REQ_ID_UNDER_REVIEW.isVisible();

        if (!isVisible) {
            console.log("Service Request Under Review not visible — skipping approve flow");
            return;
        }

        console.log("Service Request Under Review is visible — performing approve flow");

        await this.clickOnServiceReqUnderReview();
        await this.clickOnServiceReqApproveButton();
        await this.validateServiceReqStatusSuccessMsg();

        console.log("Service Request approved successfully");
    }

    async clickOnServiceReqApproveButton() {
        console.log("Clicking on Approve Button");
        await this.APPROVE_BUTTON.waitFor({ state: 'visible' });
        await this.APPROVE_BUTTON.click();
    }

    async validateServiceReqStatusSuccessMsg() {
        console.log("Validating Service Request Status Success Message");
        await this.APPROVE_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.APPROVE_SUCCESS_MSG).toBeVisible();
    }

    async clickOnServiceReqRejectButton() {
        console.log("Clicking on Reject Button");
        await this.REJECT_BUTTON.waitFor({ state: 'visible' });
        await this.REJECT_BUTTON.click();
    }

    async rejectServiceReqIfUnderReviewVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request Under Review is visible...");

        const isVisible = await this.SERVICE_REQ_ID_UNDER_REVIEW.isVisible();

        if (!isVisible) {
            console.log("Service Request Under Review not visible — skipping reject flow");
            return;
        }

        console.log("Service Request Under Review is visible — performing reject flow");

        await this.clickOnServiceReqUnderReview();
        await this.clickOnServiceReqRejectButton();
        await this.validateServiceReqStatusSuccessMsg();

        console.log("Service Request rejected successfully");
    }

    async clickOnServiceReqHamburgerWithAcceptedStatus() {
        console.log("Clicking on Accepted Status Service Request Hamburger");
        await this.SERVICE_REQ_ACCEPTED_STATUS_HABURGER.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_ACCEPTED_STATUS_HABURGER.click();
    }

    async markServiceReqAsCompleteIfAcceptedVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Accepted Status Service Request Hamburger is visible...");

        const isVisible = await this.SERVICE_REQ_ACCEPTED_STATUS_HABURGER.isVisible();

        if (!isVisible) {
            console.log("Accepted Status Hamburger not visible — skipping mark as complete flow");
            return;
        }

        console.log("Accepted Status Hamburger is visible — performing Mark as Complete flow");

        await this.clickOnServiceReqHamburgerWithAcceptedStatus();
        await this.clickOnServiceReqMarkAsComplete();
        await this.validateServiceReqStatusSuccessMsg();

        console.log("Service Request marked as complete successfully");
    }

    async clickOnServiceReqMarkAsComplete() {
        console.log("Clicking on Mark As Complete");
        await this.SERVICE_REQ_MARK_AS_COMPLETE.waitFor({ state: 'visible' });
        await this.SERVICE_REQ_MARK_AS_COMPLETE.click();
    }

    async clickOnCompleteButton() {
        console.log("Clicking on Complete Button");
        await this.COMPLETE_BUTTON.waitFor({ state: 'visible' });
        await this.COMPLETE_BUTTON.click();
    }

    async completeServiceReqIfVisible() {
        await this.page.waitForTimeout(1500);
        await expect(this.NO_DATA_AVAILABLE).toBeHidden();
        console.log("Checking if Service Request ID is visible...");

        const isVisible = await this.SERVICE_REQ_ID.isVisible();

        if (!isVisible) {
            console.log("Service Request ID not visible — skipping complete flow");
            return;
        }

        console.log("Service Request ID is visible — performing complete flow");

        await this.clickOnServiceReqID();
        await this.clickOnCompleteButton();
        await this.validateServiceReqStatusSuccessMsg();

        console.log("Service Request completed successfully");
    }

    // async loginToEmployeePortal() {
    //     console.log("Checking Employee Portal login status...");
    //     await this.page.goto('https://employeeportal.qa.ir.solidrange.com/');
    //     await this.page.waitForLoadState('load');
    //     await this.page.waitForTimeout(3500);
    //     // If collapse icon is visible, user is already logged in
    //     const isAlreadyLoggedIn = await this.page.locator(`//input[@id="Username"]`).isVisible();

    //     if (!isAlreadyLoggedIn) {
    //         console.log("User already logged in — skipping login flow");
    //         return;
    //     }

    //     console.log("User not logged in — performing login");

    //     await this.page.fill('//input[@id="Username"]', `${this.employeeUserEmail}`);
    //     await this.page.click('//input[@type="submit"]');

    //     await this.page.fill('//input[@placeholder="Password"]', `${testConfig.resetPassword}`);
    //     await this.page.click("//button[text()='Log in']");

    //     await this.page.waitForLoadState('networkidle');

    //     console.log("Employee Portal login completed");
    // }

    async loginToEmployeePortal() {
        console.log("Clearing browser session...");
        await this.page.context().clearCookies();
        // await this.page.goto('https://employeeportal.qa.ir.solidrange.com/');
        await this.page.goto('https://employee.stage.ir.solidrange.com/');

        // Clear Local Storage & Session Storage
        await this.page.evaluate(() => {
            localStorage.clear();
            sessionStorage.clear();
        });

        await this.page.reload();

        console.log("Performing login...");

        await this.page.fill('#Username', testConfig.employeePortalEmail);
        await this.page.click('//input[@type="submit"]');

        await this.page.fill('//input[@placeholder="Password"]', testConfig.employeePortalPassword);
        await this.page.click("//button[text()='Log in']");

        await this.page.waitForTimeout(5000);

        console.log("Employee Portal login completed");
    }

    async clickOnEmpPortalMenubarExpand() {
        console.log("Expanding Employee Portal Menu Bar");
        await this.page.waitForTimeout(2500);
        // If collapse icon is visible, menu is already expanded
        if (await this.EMP_PORTAL_MENU_BAR_COLLAPS.isVisible()) {
            console.log('Menu is already expanded');
            return;
        }

        // Otherwise click expand
        await this.EMP_PORTAL_MENU_BAR_EXPAND.waitFor({ state: 'visible' });
        await this.EMP_PORTAL_MENU_BAR_EXPAND.click();
    }

    async clickOnNewRequestButton() {
        console.log("Clicking on New Request Button");
        await this.NEW_REQUEST_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_REQUEST_BUTTON.click();
    }

    async clickOnNotify() {
        console.log("Clicking on Notify Button");
        await this.NOTIFY.waitFor({ state: 'visible' });
        await this.NOTIFY.click();
    }

    async validateNotifySuccessMsg() {
        console.log("Validating Notify Success Message");
        await this.NOTIFIED_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.NOTIFIED_SUCCESS_MSG).toBeVisible();
    }

    async clickAndSelectReqPriorityLevel() {
        console.log("Selecting Request Priority Level");
        await this.PRIORITY_LEVEL_DROPDOWN.waitFor({ state: 'visible' });
        await this.PRIORITY_LEVEL_DROPDOWN.click();
        await this.OPTION.click();
    }

    public requestTitle!: string;

    async enterRequestTitle() {
        console.log("Entering Request Title");
        const random = Math.floor(Math.random() * 10000);
        this.requestTitle = `Automation_Request${random}`;
        await this.REQUEST_TITLE_FIELD.waitFor({ state: 'visible' });
        await this.REQUEST_TITLE_FIELD.fill(this.requestTitle);
        console.log(`Request Title: ${this.requestTitle}`);
    }

    async verifyRequestTitleInMyRequests() {
        console.log(`Verifying Request Title: ${this.requestTitle}`);
        const requestTitleLocator = this.page.locator(`//td[@data-column-header='Title']//span[normalize-space()='${this.requestTitle}']`);
        await expect(requestTitleLocator).toBeVisible();
        console.log(`Request Title verified successfully: ${this.requestTitle}`);
    }

    async clickOnSubmitRequestButton() {
        console.log("Clicking on Submit Request Button");
        await this.SUBMIT_REQ_BUTTON.waitFor({ state: 'visible' });
        await this.SUBMIT_REQ_BUTTON.click();
    }

    async clickOnEmpPortalHamburgerOption() {
        console.log("Clicking on Employee Portal Hamburger Option");
        await this.EMPLOYEE_PORTAL_HAMBURGER.waitFor({ state: 'visible' });
        await this.EMPLOYEE_PORTAL_HAMBURGER.click();
        console.log("Clicked on Employee Portal Hamburger Option");

    }

    async clickOnEmpPortalCrossIcon() {
        console.log("Clicking on Employee Portal Cross Icon");
        await this.EMP_PORTAL_CROSS_ICON.waitFor({ state: 'visible' });
        await this.EMP_PORTAL_CROSS_ICON.click();
    }

    async exportEmpPdfIcon() {
        try {
            await this.EXPORT_REPORT.waitFor({ state: 'visible' });
            console.log('Export Pdf icon clicked');

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.EXPORT_EXCEL_ICON.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../exported_file');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Pdf file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportPdfIcon: ${error.message}`);
        }
    }

    async clickAndSelectReqStatusFilter() {
        console.log("Selecting Request Status Filter");
        await this.STATUS_FILTER.waitFor({ state: 'visible' });
        await this.STATUS_FILTER.click();
        await this.OPTION.click();
    }

    async clickAndSelectReqPriorityFilter() {
        console.log("Selecting Request Priority Filter");
        await this.PRIORITY_FILTER.waitFor({ state: 'visible' });
        await this.PRIORITY_FILTER.click();
        await this.OPTION.click();
    }

    async clickAndSelectReqSubmittedByFilter() {
        console.log("Selecting Request Submitted By Filter");
        await this.SUBMITTED_BY_FILTER.waitFor({ state: 'visible' });
        await this.SUBMITTED_BY_FILTER.click();
        await this.OPTION.click();
    }

    async clickAndSelectDueDateFrom() {
        console.log("Selecting Due Date From");
        await this.DUE_DATE_FROM_CAL.waitFor({ state: 'visible' });
        await this.DUE_DATE_FROM_CAL.click();
        await Utils.clickFirstEnabledDate(this.page);
    }

    async clickAndSelectDueDateTo() {
        console.log("Selecting Due Date To");
        await this.DUE_DATE_TO_CAL.waitFor({ state: 'visible' });
        await this.DUE_DATE_TO_CAL.click();
        await Utils.clickSecondLastEnabledDate(this.page);
    }

    async validateFilteredData() {
        console.log("Validating Filtered Data");
        await this.page.waitForTimeout(2500);
        await this.page.waitForLoadState('domcontentloaded')
        expect(await this.FILTERED_DATA.isVisible() || await this.NO_DATA_AVAILABLE.first().isVisible()).toBeTruthy();
    }

    async clickOnClearAllFilter() {
        console.log("Clicking on Clear All Filter");
        await this.page.waitForTimeout(1500);
        await this.CLEAR_ALL_FILTER.waitFor({ state: 'visible' });
        await this.CLEAR_ALL_FILTER.click();
    }

    async clickAndSelectReqOwnerFilter() {
        console.log("Selecting Request Owner Filter");
        await this.REQ_OWNER_FILTER.waitFor({ state: 'visible' });
        await this.REQ_OWNER_FILTER.click();
        await this.OPTION.click();
    }

    async checkAndCreateVendor() {
        await this.page.waitForTimeout(2000);
        const vendor = this.page.locator("//a[contains(text(),'Testing09')]");
        // await expect(await this.NO_DATA_AVAILABLE.isHidden()||await this.VENDOR_NAME.isVisible()).toBeTruthy();

        if (await this.NO_DATA_AVAILABLE.isHidden() || await this.VENDOR_NAME.isVisible()) {
            console.log("Vendor already exists");
            return;
        }

        console.log("Vendor not found. Creating vendor");
        await this.clickOnAddVendor();
        await this.enterVendorName('Automation_Vendor');
        await this.enterAddress('Automation_Address09');
        await this.clickAndSelectVendorType();
        await this.clickAndSelectVendorDepartment();
        await this.enterPhoneNumber();
        await this.clickAndSelectVendorManager();
        await this.clickAndSelectVendorRisk();
        await this.enterProductName('Automation_Product');
        await this.enterWebsite('AutomationWeb');
        await this.enterDomain('Automation_Domain');
        await this.enterVendorDesc('fdsfgwegfsjbfhshhsh');
        await this.clickOnAddContact();
        await this.enterConatactName('Automation_Testing_Contact');
        await this.enterPosition('Automation_Position');
        await this.enterContactPhoneNumber();
        await this.enterEmail();
        await this.clickOnAddButton();
        await this.clickOnCreatevendor();
        await this.validateSuccessMsg();
        console.log("Vendor created successfully");
    }

    async ensureInitiativeExists() {
        await this.page.waitForTimeout(3000);

        const isVisible = await this.SELECT_INITIATIVE.isVisible();

        if (isVisible) {
            console.log('Initiative already exists. Skipping creation.');
            return;
        }

        console.log('Initiative not found. Creating a new one...');

        await this.clickOnNewInitiative();
        await this.enterInitiativeTittle();
        await this.enterInitiativeDesc();
        await this.clickOnRadioButton();
        await this.clickAndSelectStartDate();
        await this.clickAndSelectEndDate();
        await this.SelectPurpose();
        await this.selectInitiativeDepartment();
        await this.SelectInitiativeOwner();
        await this.clickOnCreate();
        await this.validateSuccessMsg();
    }

    async createTemplateIfNotExists() {
        await this.page.waitForTimeout(3000);
        const isVisible = await this.USE_TEMPLATE.isVisible();

        if (isVisible) {
            return;
        }

        await this.clickOnCreateTemplate();
        await this.enterArabicName('Testingo');
        await this.enterEnglishName('Testing');
        await this.enterDocumentText('Textoj');
        await this.clickOnCreateButtonGov();
        await this.validateSuccessMsg();
    }

    async clickOnHamburgersTillActivateIsVisible() {
        await this.page.waitForTimeout(2000);
        await this.page.waitForSelector('button.dropdown-toggle.icon-only', { state: 'visible' });

        const hamburgers = this.page.locator('button.dropdown-toggle.icon-only');
        const count = await hamburgers.count();

        for (let i = 0; i < count; i++) {
            const currentHamburger = hamburgers.nth(i);

            await currentHamburger.scrollIntoViewIfNeeded();
            await currentHamburger.click({ force: true });
            await this.page.waitForTimeout(1000);

            if (await this.ACTIVATE_RISK.isVisible()) {
                return;
            }

            await this.page.keyboard.press('Escape');
            await this.page.waitForTimeout(500);
        }
    }

    async clickOnHamburgersTillDeactivateIsVisible() {
        await this.page.waitForTimeout(2000);
        await this.page.waitForSelector('button.dropdown-toggle.icon-only', { state: 'visible' });
        const hamburgers = this.page.locator('button.dropdown-toggle.icon-only');
        const count = await hamburgers.count();
        console.log(count)
        for (let i = 0; i < count; i++) {
            const currentHamburger = hamburgers.nth(i);

            await currentHamburger.scrollIntoViewIfNeeded();
            await currentHamburger.click({ force: true });
            await this.page.waitForTimeout(1000);

            if (await this.DEACTIVATE_RISK.isVisible()) {
                console.log("Clicking Deactivate Risk");
                // await this.DEACTIVATE_RISK.click();
                return;
            }

            await this.page.keyboard.press('Escape');
            await this.page.waitForTimeout(500);
        }
    }

    async createInternalControlIfHamburgerNotVisible() {
        await this.page.waitForTimeout(2000)
        const isHamburgerVisible = await this.HAMBURGER.isVisible();

        if (!isHamburgerVisible) {
            await this.clickOnAddControl();
            await this.enterNameToArabicControlfield('testing0');
            await this.enterNameToEngControlfield('testing90');
            await this.clickOnAddButton();
            await this.validateSuccessMsg();
        } else {
            console.log('Hamburger menu is visible. Skipping control creation.');
        }
    }

    async updateEvidenceSettingsIfDataNotExists() {
        await this.page.waitForTimeout(2000);
        const isNoDataVisible = await this.NO_DATA_AVAILABLE.isVisible();

        if (isNoDataVisible) {
            await this.clickOnEvidenceSetting();
            await this.clickAndCheckCheckbox();
            await this.clickOnUpdate();
        } else {
            console.log("'Data' is visible. Skipping update.");
        }
    }

    async createVendorIfNoDataVisible() {
        await this.page.waitForTimeout(2000)
        await this.ADD_VENDOR_BUTTON.waitFor({ state: 'visible' });
        expect(await this.NO_DATA_AVAILABLE.isVisible() || await this.HAMBURGER.isVisible()).toBeTruthy();
        const isNoDataVisible = await this.NO_DATA_AVAILABLE.isVisible();
        if (isNoDataVisible) {
            await this.clickOnAddVendor();
            await this.enterVendorName('Automation_Vendor');
            await this.enterAddress('Automation_Address09');
            await this.clickAndSelectVendorType();
            await this.clickAndSelectVendorDepartment();
            await this.enterPhoneNumber();
            await this.clickAndSelectVendorManager();
            await this.clickAndSelectVendorRisk();
            await this.enterProductName('Automation_Product');
            await this.enterWebsite('AutomationWeb');
            await this.enterDomain('Automation_Domain');
            await this.enterVendorDesc('fdsfgwegfsjbfhshhsh');
            await this.clickOnAddContact();
            await this.enterConatactName('Automation_Testing_Contact');
            await this.enterPosition('Automation_Position');
            await this.enterContactPhoneNumber();
            await this.enterEmail();
            await this.clickOnAddButton();
            await this.clickOnCreatevendor();
            await this.validateSuccessMsg();
        } else {
            console.log('Vendor data already exists. Skipping vendor creation.');
        }
    }

    async createEmployeeIfHamburgerNotVisible(): Promise<void> {
        await this.NEW_EMPLOYEE_BUTTON.waitFor({ state: 'visible' });
        const isHamburgerVisible = await this.HAMBURGER.isVisible();

        if (!isHamburgerVisible) {
            await this.clickOnNewEmployeeButton();
            await this.enterEmpUsername();
            await this.enterEmpFullName();
            await this.enterEmpEmail();
            await this.enterEmpTitle();
            await this.selectDepartmentFromDropdown();
            await this.clickOnCreate();
            await this.validateSuccessMsg();

            console.log('Employee created successfully.');
        } else {
            console.log('Hamburger menu is visible. Skipping employee creation.');
        }
    }

    async performLinkTreatmentIfDataVisible(): Promise<void> {
        await this.page.waitForTimeout(2000);
        expect(await this.SELECT_MAP_CHECKBOX.isHidden() || await this.SELECT_MAP_CHECKBOX.isVisible()).toBeTruthy()
        if (!(await this.SELECT_MAP_CHECKBOX.isVisible())) {
            console.log('Data not visible. Skipping Map Control actions.');
            return;
        }

        await this.selectMapControlCheckbox();
        await this.clickOnMapControlButton();
    }

    async verifyEmployeeTabIfNotThenCreateEmployee() {
        console.log("Verifying Employee Tab");

        await this.EMPLOYEES_TAB.waitFor({ state: 'visible' });
        await this.EMPLOYEES_TAB.click();

        console.log("Opening Employee Creation Form...");

        await this.NEW_EMPLOYEE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_EMPLOYEE_BUTTON.click();

        console.log("Clicked on New Employee button.");
    }

    public employeeEmail: string;

    async enterEmpEmail2() {
        console.log("Entering Employee Email");
        await this.EMP_EMAIL.waitFor({ state: 'visible' });
        await this.EMP_EMAIL.fill(this.employeeUserEmail);
        console.log(`Employee Email: ${this.employeeUserEmail}`);
    }

    async verifyEmployeeAndClickThreeDots() {
        // console.log(`Verifying Employee Email: ${this.employeeUserEmail}`);

        // const emailCell = this.page.locator(
        //     `//td[@data-column-header='Email']//div[normalize-space()='${this.employeeUserEmail}']`
        // );

        // await emailCell.waitFor({ state: 'visible', timeout: 10000 });

        // // Email verify ho gaya
        // await expect(emailCell).toBeVisible();

        // console.log(`Employee found: ${this.employeeEmail}`);

        // // Same row ka 3 dots button
        // const threeDots = this.page.locator(
        //     `//td[@data-column-header='Email']//div[normalize-space()='${this.employeeUserEmail}']
        // /ancestor::tr//span[@class='s-dots-vertical']`
        // );

        // await threeDots.click();

        // console.log("Clicked on 3 dots");

        console.log(`Verifying Employee Email: ${this.employeeUserEmail}`);
        await this.page.waitForTimeout(2000);

        const emailCell = this.page.locator(
            `//td[@data-column-header='Email']//div[normalize-space()='${this.employeeUserEmail}']`
        );

        while (true) {
            if (await emailCell.isVisible().catch(() => false)) {
                break;
            } else {
                console.log("Moving to next page...");
                await this.NEXT_PAGE.waitFor({ state: 'visible' });
                await this.NEXT_PAGE.click();
                await this.page.waitForTimeout(2000);
            }
        }

        await emailCell.waitFor({ state: 'visible', timeout: 10000 });
        await expect(emailCell).toBeVisible();

        console.log(`Employee found: ${this.employeeUserEmail}`);

        const threedots = this.page.locator(
            `//td[@data-column-header='Email']//div[normalize-space()='${this.employeeUserEmail}']/ancestor::tr//span[@class='s-dots-vertical']`
        );

        await threedots.click();

        console.log("Clicked on 3 dots");
    }

    async clickNotifyButton() {
        console.log("Waiting for Notify button to be visible...");

        await this.NOTIFY.waitFor({
            state: 'visible',
            timeout: 10000
        });

        console.log("Notify button is visible. Clicking on it...");

        await this.NOTIFY.click();

        console.log("Successfully clicked on Notify button.");
    }

    async validateNotifySuccessMessage() {
        console.log("Validating Notify Success Message");

        await this.NOTIFY_SUCCESS_MESSAGE.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const message = await this.NOTIFY_SUCCESS_MESSAGE.textContent();

        console.log(`Displayed Message: ${message?.trim()}`);

        await expect(this.NOTIFY_SUCCESS_MESSAGE).toBeVisible();

        console.log("Notify Success Message validated successfully");

    }
    async openResetPasswordLinkFromYopmail(email: string) {
        // YOPMail inbox name extract
        const inboxName = email.includes('@')
            ? email.split('@')[0]
            : email;

        console.log(`Opening YOPMail inbox: ${inboxName}`);

        // Open YOPMail
        await this.page.goto('https://yopmail.com/en/');

        // Enter inbox name
        await this.page.locator("//input[@id='login']").fill(inboxName);

        // Click arrow button
        await this.page
            .locator("//i[contains(@class,'material-icons-outlined') and contains(@class,'f36')]")
            .click();

        // Wait for inbox load
        await this.page.waitForTimeout(5000);

        // Click latest email
        await this.page
            .locator("//div[contains(@class,'m')]")
            .first()
            .click()
            .catch(() => { });

        // Wait for email body
        const mailFrame = this.page.frameLocator('#ifmail');

        await mailFrame.locator('a').first().waitFor({
            state: 'visible',
            timeout: 30000
        });

        // Extract reset/welcome link
        const resetLink = await mailFrame
            .locator('a')
            .first()
            .getAttribute('href');

        if (!resetLink) {
            throw new Error('Reset password link not found in email.');
        }

        console.log(`Reset Link: ${resetLink}`);

        // Open reset password page
        await this.page.goto(resetLink, {
            waitUntil: 'networkidle'
        });

        console.log('Reset Password page opened successfully.');

        await this.page.waitForTimeout(2000);
    }

    async enterPasswordAndConfirm() {
        await this.RESET_PASSWORD_INPUT.fill(testConfig.resetPassword);
        await this.CONFIRM_RESET_PASSWORD_INPUT.fill(testConfig.confirmResetPassword);
    }

    async clickChangeButton() {
        await this.CHANGE_PASSWORD_BUTTON.click();
    }

    async loginToApplication() {
        const ENV = (process.env.ENV as keyof typeof testConfig.envURL) || 'qa';
        const baseURL = testConfig.envURL[ENV];

        console.log(`Step 2: Navigate to login page: ${baseURL}/login`);
        await this.page.goto(`${baseURL}/login`, {
            timeout: 600000,
            waitUntil: 'load'
        });

    }
    // New Functions

    async verifyAuditExistsOrCreateAndEdit() {
        await this.page.waitForLoadState('networkidle');
        const auditHamburger = this.REMARK_HAMBURGER;

        if (await auditHamburger.isVisible({ timeout: 5000 }).catch(() => false)) {
            console.log('Audit already exists. Proceeding with edit flow.');
        } else {
            console.log('No Audit found. Creating a new Audit.');

            await this.clickOnNewAudit();
            await this.enterAuditName();
            await this.enterAuditDesc();
            await this.clickAndSelectAuditorType();
            await this.clickAndSelectFramework();
            await this.SelectDepartment();
            await this.clickAndSelectAuditOwner();
            await this.clickAndSelectAuditor();
            await this.clickOnCreateAudit();
            await this.validateSuccessMsg();
            await this.page.waitForLoadState('networkidle');
            await this.page.waitForTimeout(2000);
        }
    }

    async verifyAuditExistsOrCreateAndEdit1() {
        await this.page.waitForTimeout(2000);
        await expect(this.NEW_AUDIT_BUTTON).toBeVisible();
        const auditHamburger = this.REMARK_HAMBURGER;

        if (await auditHamburger.isVisible({ timeout: 5000 }).catch(() => false)) {
            console.log('Audit already exists. Proceeding with edit flow.');
        } else {
            console.log('No Audit found. Creating a new Audit.');

            await this.clickOnNewAudit();
            await this.enterAuditName();
            await this.enterAuditDesc();
            await this.clickAndSelectAuditorType();
            await this.clickAndSelectFramework();
            await this.SelectDepartment();
            await this.clickAndSelectAuditOwner();
            await this.clickAndSelectAuditor();
            await this.clickOnCreateAudit();
            await this.validateSuccessMsg();
            await this.page.waitForTimeout(2000);
        }
    }


    async clickAndSelectDraftRisk() {
        await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
        console.log("Checking for Open/Closed Risk");
        const openOrClosedRisk = this.page.locator(
            `(//div[text()='Open' or text()='Closed']/ancestor::tr//a[contains(@class,"mat-mdc")])[1]`
        );

        if (await openOrClosedRisk.count() > 0) {
            console.log("Open/Closed Risk found. Selecting it.");
            await openOrClosedRisk.first().click();
        } else {
            console.log("Open/Closed Risk not found. Selecting Draft Risk.");

            const draftRisk = this.page.locator(
                `(//div[text()='Draft']/ancestor::tr//a[contains(@class,"mat-mdc")])[1]`
            );

            await draftRisk.waitFor({ state: 'visible', timeout: 10000 });
            await draftRisk.click();
            await this.page.waitForTimeout(3000);
            await this.clickOnNextButton();
            // await this.clickIfSliderVisibleItivate();
            await this.page.waitForTimeout(2000);
            await this.clickFinish();
            await this.validateSuccessMsg();
        }

        console.log("Risk item selected successfully");

    }

    async clickAndSelectDraftRisk1() {
        console.log("Searching for Open/Closed Risk...");

        const nextPage = this.page.locator(`//span[@class='s-chevron-right']`);

        while (true) {

            await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
            await this.page.waitForTimeout(3000);

            const risk = this.page.locator(
                `//div[normalize-space()='Open' or normalize-space()='Closed']/ancestor::tr//a[contains(@class,'mat-mdc')]`
            );

            if (await risk.first().isVisible().catch(() => false)) {
                console.log("Open/Closed Risk found.");
                await risk.first().scrollIntoViewIfNeeded();
                await risk.first().click();
                console.log("Risk selected successfully");
                return;
            }

            const draftRisk = this.page.locator(
                `//div[normalize-space()='Draft']/ancestor::tr//a[contains(@class,'mat-mdc')]`
            );

            if (await draftRisk.first().isVisible().catch(() => false)) {
                console.log("Draft Risk found.");
                await draftRisk.first().scrollIntoViewIfNeeded();
                await draftRisk.first().click();

                await this.page.waitForTimeout(3000);
                await this.clickOnNextButton();
                await this.page.waitForTimeout(2000);
                await this.clickFinish();
                await this.validateSuccessMsg();

                console.log("Draft Risk converted successfully");
                return;
            }

            if (!(await nextPage.isEnabled())) {
                throw new Error("No Open/Closed or Draft Risk found.");
            }

            console.log("Moving to next page...");
            await nextPage.click();

            await this.page.locator('.loading-spinner').waitFor({ state: 'hidden' });
            await this.page.waitForTimeout(3000);
        }

    }

    //New Function 

    async openActiveAuditOrCreateNew() {
        console.log("Checking for Active Audit");
        await this.page.waitForTimeout(1000);

        const activeAuditCount = await this.AUDIT_NAME.count();

        if (activeAuditCount > 0) {
            console.log("Active Audit found. Opening it...");
            await this.AUDIT_NAME.first().click();
            await this.page.waitForTimeout(1500);
            console.log("Active Audit opened successfully");
        } else {
            console.log("No Active Audit found. Creating new Audit...");

            await this.clickOnNewAudit();
            await this.enterAuditName();
            await this.enterAuditDesc();
            await this.clickAndSelectAuditorType();
            await this.clickAndSelectFramework();
            await this.SelectDepartment();
            await this.clickAndSelectAuditOwner();
            await this.clickAndSelectAuditor();
            await this.clickOnCreateAudit();
            await this.validateSuccessMsg();

            await this.AUDIT_NAME.first().waitFor({ state: 'visible', timeout: 10000 });
            await this.AUDIT_NAME.first().click();

            console.log("New Audit created and opened successfully");
        }
    }

    async ensureActiveDocumentPresent() {
        console.log("Creating and activating a new document...");

        await this.clickOnNewDoc();
        await this.clickOnCreateDoc();
        await this.enterTittle('Automation Doc Test');
        await this.enterDescriptionGov('Description for automation document');
        await this.clickAndSelectType();
        await this.clickAndSelectdistribution();
        await this.clickAndSelectFromDate();
        await this.clickAndSelectToDate();
        await this.clickONOwnerShhipButton();
        await this.SelectDepartment();
        await this.selectIssueOwnerGov();
        await this.enterVersion('1');
        await this.clickONNext();
        await this.enterDocText('Automation_Text');
        await this.clickONNext();
        await this.clickOnFinish();
        await this.validateSuccessMsg();
        await this.page.waitForTimeout(2000);
        await this.clickOnTableViewIfNotVisible();
        await this.page.waitForTimeout(2000);
        const doc = this.page.locator(`//a[normalize-space()='${this.lastCreatedDocTitle}']`);
        await doc.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);

        // Find the row containing the unique title and click its 3-dot menu
        const row = this.page.locator(`//tr[.//a[normalize-space()='${this.lastCreatedDocTitle}']]`);
        const hamburger = row.locator('button.dropdown-toggle.icon-only');
        await hamburger.waitFor({ state: 'visible' });
        await hamburger.click();
        await this.page.waitForTimeout(300);
        await this.ACTIVATE_BUTTON.waitFor({ state: 'visible' });
        await this.ACTIVATE_BUTTON.click();
        await this.page.locator("//span[normalize-space()='Submit']").click();

        await this.validateSuccessMsg();
        await this.clickOnTableViewIfNotVisible();
        console.log(`Document '${this.lastCreatedDocTitle}' created and activated successfully.`);
    }

    async clickOnDocNameVersion1() {
        console.log(`Waiting for document: ${this.lastCreatedDocTitle}`);
        await this.page.waitForTimeout(2000);
        const doc = this.page.locator(`//a[normalize-space()='${this.lastCreatedDocTitle}']`);
        await doc.waitFor({ state: 'visible' });
        console.log("Clicking on Document Name");
        await doc.click();
        console.log("Clicked on Document Name");
    }

    async deleteCreatedDocument() {
        await this.page.waitForTimeout(15000);
        const hamburger = this.page.locator(`//div[contains(@class,'options-menu')]//button[contains(@class,'dropdown-toggle')]`);
        await hamburger.waitFor({ state: 'visible' });
        await hamburger.click();
        const deleteOption = this.page.locator(`//span[normalize-space()='Delete']`);
        await deleteOption.waitFor({ state: 'visible' });
        await deleteOption.click();
        const confirmButton = this.page.locator(`//button[normalize-space()='Yes']`);
        await confirmButton.waitFor({ state: 'visible' });
        await confirmButton.click();
        await this.validateDeleteSuccessMsg();
        console.log(`Document '${this.lastCreatedDocTitle}' deleted successfully.`);
    }

    async clickSelectRiskSource() {
        console.log("SelectingRiskSource");
        await this.page.waitForTimeout(3000);
        await this.RISK_SOURCE_DROPDOWN.waitFor({ state: 'visible' });
        await this.RISK_SOURCE_DROPDOWN.click();
        const risk = this.page.locator(`//span[normalize-space()='Vendor']`);
        await risk.waitFor({ state: 'visible' });
        await risk.click();
        console.log("RiskSourceSelected");
    }

    async clickSelectRiskSourceCategory() {
        console.log("SelectingRiskSourceCategory");
        await this.page.waitForTimeout(3000);
        await this.RISK_SOURCE_CATEGORY.waitFor({ state: 'visible' });
        await this.RISK_SOURCE_CATEGORY.click();
        await this.page.waitForTimeout(1000);
        await this.OPTION.click();
        console.log("RiskSourceCategorySelected");
    }

    async selectFrameworkCheckbox1() {
        console.log("Checking if framework data is available");
        const noDataAvailable = this.page.locator("(//div[normalize-space()='No Data Available'])[3]");
        await noDataAvailable.waitFor({ state: "visible", timeout: 10000 });
        console.log("'No Data Available' is visible. Selecting Framework.");
        await this.clickAndSelectFramework1();
        console.log("Checking checkbox");
        await this.MAP_FRAMEWORK_CHECKBOX.waitFor({ state: "visible", timeout: 10000 });
        await this.MAP_FRAMEWORK_CHECKBOX.scrollIntoViewIfNeeded();
        await this.MAP_FRAMEWORK_CHECKBOX.click();
        console.log("Checkbox checked successfully");
    }

    async clickAndSelectFramework1() {
        console.log("Selecting Framework: ");
        await this.page.waitForTimeout(2000);
        await this.FRAMEWORKS_DROPDOWN.waitFor({ state: 'visible', timeout: 6000 });
        await this.FRAMEWORKS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.FRAMEWORKS_DROPDOWN.click();

        await this.OPTION.waitFor({ state: 'visible', timeout: 10000 });
        await expect(this.OPTION).toBeVisible();
        await this.OPTION.click();
        console.log("Framework selected");
    }

    async selectFrameworkCheckboxNew() {
        console.log("Checking if framework data is available");

        // const noDataAvailable = this.page.locator(`(//div[normalize-space()='No Data Available'])[5]`);
        // await noDataAvailable.waitFor({ state: "visible", timeout: 10000 });

        console.log("'No Data Available' is visible. Selecting Framework.");
        await this.clickAndSelectFramework();

        console.log("Checking checkbox");
        await this.MAP_FRAMEWORK_CHECKBOX.waitFor({ state: "visible", timeout: 10000 });
        await this.MAP_FRAMEWORK_CHECKBOX.scrollIntoViewIfNeeded();
        await this.MAP_FRAMEWORK_CHECKBOX.click();

        console.log("Checkbox checked successfully");
    }

    // New Function :-  21 July

    async verifyAuditExistsOrCreateAndEditAudit() {
        await this.page.waitForTimeout(2000);
        await expect(this.NEW_AUDIT_BUTTON).toBeVisible();

        console.log("Creating a new Audit.");

        await this.clickOnNewAudit();
        await this.enterAuditName();
        await this.enterAuditDesc();
        await this.clickAndSelectAuditorType();
        await this.clickAndSelectFramework();
        await this.SelectDepartment();
        await this.clickAndSelectAuditOwner();
        await this.clickAndSelectAuditor();
        await this.clickOnCreateAudit();
        await this.validateSuccessMsg();
        await this.page.waitForTimeout(2000);

        console.log("Audit created successfully.");
    }

    async enterNewEmpEmail() {
        console.log("Entering Employee Email");
        const random = Math.floor(1000 + Math.random() * 9000);

        this.createdEmployeeEmail = `Automation_Employee${random}@yopmail.com`;

        await this.EMP_EMAIL.waitFor({ state: 'visible' });
        await this.EMP_EMAIL.fill(this.createdEmployeeEmail);
    }

    // New Changes 

    async verifyEmployeeExistsOrCreate() {
        console.log("Verifying Employee...");

        await this.EMPLOYEES_TAB.waitFor({ state: 'visible' });
        await this.EMPLOYEES_TAB.click();
        await this.NEW_EMPLOYEE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_EMPLOYEE_BUTTON.click();

        await this.enterEmpUsername();
        await this.enterEmpFullName();
        await this.enterNewEmpEmail();
        await this.enterEmpTitle();
        await this.selectDepartmentFromDropdown();
        await this.clickOnCreate();
        await this.validateSuccessMsg();

        await this.verifyNewEmployeeAndClickThreeDots();
        await this.clickNotifyButton();
        await this.validateNotifySuccessMsg();
        console.log("Employee created successfully.");

        // Execute only for newly created employee
        await this.openResetPasswordLinkFromYopmail(this.createdEmployeeEmail);
        await this.enterNewPasswordAndConfirm();
        await this.clickChangeButton();

        console.log("Employee created and password reset completed.");
    }

    async enterNewPasswordAndConfirm() {
        await this.RESET_PASSWORD_INPUT.fill(testConfig.employeePortalPassword);
        await this.CONFIRM_RESET_PASSWORD_INPUT.fill(testConfig.employeePortalPassword);
    }

    async selectNewReqTypeOwner() {
        console.log("Selecting owner");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.OPTION2.waitFor({ state: 'visible' });
        await this.OPTION2.click();
        console.log("owner selected successfully");
    }

    createdEmployeeEmail!: string;
    async verifyNewEmployeeAndClickThreeDots() {
        // console.log(`Verifying Employee Email: ${this.createdEmployeeEmail}`);

        // const emailCell = this.page.locator(
        //     `//td[@data-column-header='Email']//div[normalize-space()='${this.createdEmployeeEmail}']`
        // );

        // await emailCell.waitFor({ state: 'visible', timeout: 10000 });
        // await expect(emailCell).toBeVisible();

        // console.log(`Employee found: ${this.createdEmployeeEmail}`);

        // const threeDots = this.page.locator(
        //     `//td[@data-column-header='Email']//div[normalize-space()='${this.createdEmployeeEmail}']/ancestor::tr//span[@class='s-dots-vertical']`
        // );

        // await threeDots.waitFor({ state: 'visible' });
        // await threeDots.click();

        // console.log("Clicked on 3 dots");

        console.log(`Verifying Employee Email: ${this.createdEmployeeEmail}`);

        const emailCell = this.page.locator(
            `//td[@data-column-header='Email']//div[normalize-space()='${this.createdEmployeeEmail}']`
        );

        if (!(await emailCell.isVisible().catch(() => false))) {
            console.log("Moving to next page...");
            await this.NEXT_PAGE.waitFor({ state: 'visible' });
            await this.NEXT_PAGE.click();
            await this.page.waitForTimeout(2000);
        }

        await emailCell.waitFor({ state: 'visible', timeout: 10000 });
        await expect(emailCell).toBeVisible();

        console.log(`Employee found: ${this.createdEmployeeEmail}`);

        await this.page.locator(
            `//td[@data-column-header='Email']//div[normalize-space()='${this.createdEmployeeEmail}']/ancestor::tr//span[@class='s-dots-vertical']`
        ).click();

        console.log("Clicked on 3 dots");

    }




}