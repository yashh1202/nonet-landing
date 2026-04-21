const diagramLabel =
  'Flow from offline user to Hedera: create and sign offline, fragment for BLE, relay rebroadcast, gateway reassembles and submits, Hedera consensus.'

export function FlowDiagram() {
  return (
    <figure className="flow-diagram" aria-label={diagramLabel}>
      <div className="flow-diagram__inner" role="img">
        <div className="flow-node flow-node--accent">
          <span className="flow-node__title">Origin node (user)</span>
          <span className="flow-node__detail">Create and sign transaction — offline</span>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="flow-node">
          <span className="flow-node__title">Fragmentation</span>
          <span className="flow-node__detail">Split into BLE-sized packets with metadata</span>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="flow-mesh" aria-hidden="true">
          <span className="flow-mesh__label">BLE mesh</span>
          <div className="flow-mesh__row">
            <span className="flow-chip">Relay</span>
            <span className="flow-chip">Relay</span>
            <span className="flow-chip">Relay</span>
          </div>
          <span className="flow-mesh__caption">Store, rebroadcast, eventual spread</span>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="flow-node flow-node--teal">
          <span className="flow-node__title">Gateway node</span>
          <span className="flow-node__detail">Reassemble, verify signature and hash</span>
        </div>
        <div className="flow-arrow" aria-hidden="true" />
        <div className="flow-node flow-node--hedera">
          <span className="flow-node__title">Hedera network</span>
          <span className="flow-node__detail">Submit — same validity as online submission</span>
        </div>
      </div>
      <figcaption className="flow-diagram__caption">{diagramLabel}</figcaption>
    </figure>
  )
}
