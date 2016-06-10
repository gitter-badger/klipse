(ns figwheel.connect (:require [devcards.core :include-macros true] [klipse.cards.cards] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "devcards", :websocket-url "ws://localhost:5014/figwheel-ws"})
(devcards.core/start-devcard-ui!)

