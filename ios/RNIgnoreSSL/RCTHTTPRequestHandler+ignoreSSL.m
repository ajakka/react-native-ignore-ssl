//
//  RCTHTTPRequestHandler+ignoreSSL.m
//  RNIgnoreSSL
//
//  Created by Abderrahim on 29/2/2024.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTHTTPRequestHandler.h"

@implementation RCTHTTPRequestHandler(ignoreSSL)

- (void)URLSession:(NSURLSession *)session didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential))completionHandler
{
  completionHandler(NSURLSessionAuthChallengeUseCredential, [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust]);
}
@end
