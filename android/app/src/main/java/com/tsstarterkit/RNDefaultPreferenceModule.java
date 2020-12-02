package com.tsstarterkit;
import android.content.Context;
import android.content.SharedPreferences;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;

public class RNDefaultPreferenceModule extends ReactContextBaseJavaModule {
  private String preferencesName = "com.starterkit.react_native_preference"; //default Name

  private final ReactApplicationContext reactContext;

  public RNDefaultPreferenceModule(final ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNDefaultPreference";
  }

  @ReactMethod
  public void get(final String key, final Promise promise) {
    promise.resolve(getPreferences().getString(key, null));
  }

  @ReactMethod
  public void set(final String key, final String value, final Promise promise) {
    getEditor().putString(key, value).commit();
    promise.resolve(null);
  }

  @ReactMethod
  public void getBoolean(final String key, final Promise promise) {
    promise.resolve(getPreferences().getBoolean(key, false));
  }

  @ReactMethod
  public void setBoolean(final String key, final Boolean value, final Promise promise) {
    getEditor().putBoolean(key, value).commit();
    promise.resolve(null);
  }

  @ReactMethod
  public void clear(final String key, final Promise promise) {
    getEditor().remove(key).commit();
    promise.resolve(null);
  }

  @ReactMethod
  public void getMultiple(final ReadableArray keys, final Promise promise) {
    final WritableArray result = Arguments.createArray();
    for (int i = 0; i < keys.size(); i++) {
      result.pushString(getPreferences().getString(keys.getString(i), null));
    }
    promise.resolve(result);
  }

  @ReactMethod
  public void setMultiple(final ReadableMap data, final Promise promise) {
    final SharedPreferences.Editor editor = getEditor();
    final ReadableMapKeySetIterator iter = data.keySetIterator();
    while (iter.hasNextKey()) {
      final String key = iter.nextKey();
      editor.putString(key, data.getString(key)).commit();
    }
    promise.resolve(null);
  }

  @ReactMethod
  public void clearMultiple(final ReadableArray keys, final Promise promise) {
    final SharedPreferences.Editor editor = getEditor();
    for (int i = 0; i < keys.size(); i++) {
      editor.remove(keys.getString(i));
    }
    editor.commit();
    promise.resolve(null);
  }

  @ReactMethod
  public void getAll(final Promise promise) {
    final WritableMap result = Arguments.createMap();
    final Map<String, ?> allEntries = getPreferences().getAll();
    for (final Map.Entry<String, ?> entry : allEntries.entrySet()) {
      result.putString(entry.getKey(), entry.getValue().toString());
    }
    promise.resolve(result);
  }

  @ReactMethod
  public void clearAll(final Promise promise) {
    final SharedPreferences.Editor editor = getEditor();
    final Map<String, ?> allEntries = getPreferences().getAll();
    for (final Map.Entry<String, ?> entry : allEntries.entrySet()) {
      editor.remove(entry.getKey());
    }
    editor.commit();
    promise.resolve(null);
  }

  @ReactMethod
  public void setName(final String preferencesName, final Promise promise) {
    this.preferencesName = preferencesName;
    promise.resolve(null);
  }

  @ReactMethod
  public void getName(final Promise promise) {
    promise.resolve(preferencesName);
  }

  private SharedPreferences getPreferences() {
    return getReactApplicationContext().getSharedPreferences(preferencesName, Context.MODE_PRIVATE);
  }
  private SharedPreferences.Editor getEditor() {
    return getPreferences().edit();
  }
}
