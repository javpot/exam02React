//
//  idServiceManager.m
//  exam02React
//
//  Created by Javen Vernet on 2024-03-20.
//

#import <Foundation/Foundation.h>
#import "idServiceModule.h"


@implementation idServiceModule
RCT_EXPORT_MODULE(idServiceManager);

RCT_EXPORT_METHOD(getDeviceID: (RCTResponseSenderBlock)successCallback errorCallback: (RCTResponseSenderBlock)errorCallback)
{
  @try{
    // Implement get device id logic
    NSString *deviceID = @ "dwnknwb3231m";
    successCallback(@[deviceID]);
  }
  @catch(NSException *exception){
    errorCallback(@[exception]);
  }
}
@end
