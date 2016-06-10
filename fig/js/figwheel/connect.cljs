(ns figwheel.connect (:require [klipse.run.all] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "figwheel", :websocket-url "ws://localhost:5014/figwheel-ws"})

