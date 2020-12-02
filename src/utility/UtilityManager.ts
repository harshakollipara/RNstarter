/**
 * UtilityManager for all utility function.
 * the unique singleton instance.
 */
import RestApiClientManager from './RestClientManager/RestApiClientManager';
import ConsoleLog from './Logger/ConsoleLog';
import SecurityManager from './Security/SecurityManager';
import ObjectValidation from './Validation/ObjectValidation';
import UIValidation from './Validation/UIValidation';
import AsyncStorageManager from './OfflineStorage/AsyncStorageManager';
import Base64EncodeDecode from './Security/Base64EncodeDecode';
import JailBreakTest from './Security/jail-break-test';
import {SessionManagement} from './Session/session-management';
import URLManager from './RestClientManager/URLManager';
import AnalyticsManager from './Analytics/AnalyticsManager';
import SQLiteStorageManager from './OfflineStorage/SQLiteStorageManager';
import BiometricsManager from './Security/BiometricsManager';

export default class UtilityManager {
  //secuirty manager instance for encode -decode
  public static securityInstance: SecurityManager = new SecurityManager();

  //object Validation instance
  public static objectValidationInstance: ObjectValidation = new ObjectValidation();

  //UI Validation instance
  public static uiValidationInstance: UIValidation = new UIValidation();

  // console log instance for console log
  public static consoleLogInstance: ConsoleLog = new ConsoleLog();

  //AsyncStorage Manager
  //TODO: add jest
  public static asyncStorageInstance: AsyncStorageManager = new AsyncStorageManager();

  //TODO: add jest
  //rest api client instance for get post put delete
  public static restApiClientInstance: RestApiClientManager = new RestApiClientManager();

  //api for Music Albums
  public static apiManager: URLManager = new URLManager();

  //Session Management
  public static newSessionManagment: SessionManagement = new SessionManagement();

  //Base 64 encode decode
  public static base64EncodeDecodeInstance: Base64EncodeDecode = new Base64EncodeDecode();

  //FirebaseService Analytics
  public static googleAnalytics: AnalyticsManager = new AnalyticsManager();

  //Jail Break
  public static jailBreak: JailBreakTest = new JailBreakTest();

  //SQLiteStorage Manager
  public static sqliteStorageInstance: SQLiteStorageManager = new SQLiteStorageManager();

  //Biometrics
  public static biometrics: BiometricsManager = new BiometricsManager();

  public constructor() {}
}
