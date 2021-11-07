//
//  RuneController.swift
//  Gemini
//
//  Created by Мария Кабанова on 10/28/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import WatchKit
import Foundation
import WatchConnectivity

class RuneController: WKInterfaceController, WCSessionDelegate {

    private var session: WCSession!

    override func awake(withContext context: Any?) {
        super.awake(withContext: context)

        // Configure interface objects here.
    }

    override func willActivate() {
        // This method is called when watch view controller is about to be visible to user
        super.willActivate()
        if (WCSession.isSupported()) {
            session = WCSession.default()
            session.delegate = self
            session.activate()
        }
    }

    override func didDeactivate() {
        // This method is called when watch view controller is no longer visible
        super.didDeactivate()
    }

    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        // TODO: receive message
    }
}
