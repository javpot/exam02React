//
//  idServiceModule.h
//  exam02React
//
//  Created by Javen Vernet on 2024-03-20.
//

#ifndef idServiceModule_h
#define idServiceModule_h

#import <React/RCTBridgeModule.h>
@interface idServiceModule: NSObject <RCTBridgeModule>
- (void)getDeviceID:(RCTResponseSenderBlock)successCallback errorCallback:(RCTResponseSenderBlock)errorCallback;

@end
#endif /* idServiceModule_h */
