#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
// Assurez-vous d'inclure l'import pour RNNotifications si vous l'utilisez.
#import <RNNotifications/RNNotifications.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [RNNotifications startMonitorNotifications]; // Cette ligne doit être à l'intérieur de la méthode.
  
  self.moduleName = @"exam02React";
  // Vous pouvez ajouter vos props initiales personnalisées dans le dictionnaire ci-dessous.
  // Elles seront transmises au ViewController utilisé par React Native.
  self.initialProps = @{};

  // Il est préférable d'appeler [super application:didFinishLaunchingWithOptions:] au début de cette méthode.
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  [RNNotifications didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
  [RNNotifications didFailToRegisterForRemoteNotificationsWithError:error];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))completionHandler {
  [RNNotifications didReceiveBackgroundNotification:userInfo withCompletionHandler:completionHandler];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
