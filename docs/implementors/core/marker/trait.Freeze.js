(function() {var implementors = {};
implementors["crypto"] = [{"text":"impl Freeze for ChaCha20Ietf","synthetic":true,"types":[]},{"text":"impl Freeze for ChaChaPolyIetf","synthetic":true,"types":[]},{"text":"impl Freeze for Poly1305","synthetic":true,"types":[]},{"text":"impl Freeze for XChaCha20","synthetic":true,"types":[]},{"text":"impl Freeze for XChaChaPoly","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["iota_stronghold"] = [{"text":"impl Freeze for SLIP10DeriveInput","synthetic":true,"types":[]},{"text":"impl Freeze for Procedure","synthetic":true,"types":[]},{"text":"impl Freeze for ProcResult","synthetic":true,"types":[]},{"text":"impl Freeze for SerdeProcResult","synthetic":true,"types":[]},{"text":"impl Freeze for SHRequest","synthetic":true,"types":[]},{"text":"impl Freeze for SHResults","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for InternalActor&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for InternalMsg","synthetic":true,"types":[]},{"text":"impl Freeze for InternalResults","synthetic":true,"types":[]},{"text":"impl Freeze for SMsg","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for Bucket&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ReadWrite","synthetic":true,"types":[]},{"text":"impl Freeze for Client","synthetic":true,"types":[]},{"text":"impl Freeze for ClientMsg","synthetic":true,"types":[]},{"text":"impl !Freeze for Stronghold","synthetic":true,"types":[]},{"text":"impl Freeze for Provider","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for KeyStore&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Snapshot","synthetic":true,"types":[]},{"text":"impl Freeze for SnapshotState","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Seed","synthetic":true,"types":[]},{"text":"impl Freeze for Key","synthetic":true,"types":[]},{"text":"impl Freeze for Segment","synthetic":true,"types":[]},{"text":"impl Freeze for Chain","synthetic":true,"types":[]},{"text":"impl Freeze for ClientId","synthetic":true,"types":[]},{"text":"impl Freeze for VaultId","synthetic":true,"types":[]},{"text":"impl Freeze for ID","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ResultMessage&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Location","synthetic":true,"types":[]},{"text":"impl Freeze for StrongholdFlags","synthetic":true,"types":[]},{"text":"impl Freeze for VaultFlags","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for Secret&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["primitives"] = [{"text":"impl Freeze for MessageAuthCodeInfo","synthetic":true,"types":[]},{"text":"impl Freeze for CipherInfo","synthetic":true,"types":[]},{"text":"impl Freeze for HashInfo","synthetic":true,"types":[]},{"text":"impl Freeze for KeyDervFuncInfo","synthetic":true,"types":[]},{"text":"impl Freeze for PbkdfInfo","synthetic":true,"types":[]},{"text":"impl Freeze for SignInfo","synthetic":true,"types":[]}];
implementors["random"] = [{"text":"impl Freeze for OsRandomErr","synthetic":true,"types":[]},{"text":"impl Freeze for OsRng","synthetic":true,"types":[]}];
implementors["runtime"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for PAGE_SIZE","synthetic":true,"types":[]},{"text":"impl Freeze for GuardedAllocation","synthetic":true,"types":[]},{"text":"impl Freeze for GuardedAllocator","synthetic":true,"types":[]},{"text":"impl Freeze for __kernel_fd_set","synthetic":true,"types":[]},{"text":"impl Freeze for __kernel_fsid_t","synthetic":true,"types":[]},{"text":"impl Freeze for sock_filter","synthetic":true,"types":[]},{"text":"impl Freeze for sock_fprog","synthetic":true,"types":[]},{"text":"impl Freeze for seccomp_data","synthetic":true,"types":[]},{"text":"impl Freeze for Program","synthetic":true,"types":[]},{"text":"impl Freeze for Spec","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for ZoneSpec","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["snapshot"] = [{"text":"impl&lt;'a&gt; Freeze for LZ4Decoder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for LZ4Encoder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Block","synthetic":true,"types":[]},{"text":"impl Freeze for Duplicate","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["store"] = [{"text":"impl&lt;K, V&gt; Freeze for Cache&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Value&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["stronghold_communication"] = [{"text":"impl Freeze for ConnectionManager","synthetic":true,"types":[]},{"text":"impl Freeze for RequestDirection","synthetic":true,"types":[]},{"text":"impl&lt;Req&gt; Freeze for FirewallRequest&lt;Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for FirewallResponse","synthetic":true,"types":[]},{"text":"impl&lt;Req&gt; Freeze for OpenFirewall&lt;Req&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for FirewallRule","synthetic":true,"types":[]},{"text":"impl&lt;Req&gt; Freeze for RestrictConnectionFirewall&lt;Req&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Req, Res, T, U&gt; !Freeze for SwarmTask&lt;Req, Res, T, U&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectPeerError","synthetic":true,"types":[]},{"text":"impl Freeze for RelayConfig","synthetic":true,"types":[]},{"text":"impl Freeze for KeepAlive","synthetic":true,"types":[]},{"text":"impl&lt;Req, T&gt; !Freeze for CommunicationRequest&lt;Req, T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for FirewallBlocked","synthetic":true,"types":[]},{"text":"impl Freeze for RequestMessageError","synthetic":true,"types":[]},{"text":"impl Freeze for EstablishedConnection","synthetic":true,"types":[]},{"text":"impl&lt;Res&gt; Freeze for CommunicationResults&lt;Res&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Res: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Req, T, U&gt; !Freeze for CommunicationConfig&lt;Req, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Req, Res, T, U&gt; !Freeze for CommunicationActor&lt;Req, Res, T, U&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for MessageProtocol","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Freeze for MessageCodec&lt;T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Req&gt; Freeze for RequestEnvelope&lt;Req&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Req: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for P2PMdnsEvent","synthetic":true,"types":[]},{"text":"impl Freeze for P2PIdentifyInfo","synthetic":true,"types":[]},{"text":"impl Freeze for P2PProtocolsHandlerUpgrErr","synthetic":true,"types":[]},{"text":"impl Freeze for P2PIdentifyEvent","synthetic":true,"types":[]},{"text":"impl Freeze for P2POutboundFailure","synthetic":true,"types":[]},{"text":"impl Freeze for P2PInboundFailure","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Freeze for P2PReqResEvent&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Freeze for P2PEvent&lt;T, U&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BehaviourError","synthetic":true,"types":[]},{"text":"impl Freeze for BehaviourConfig","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Freeze for P2PNetworkBehaviour&lt;T, U&gt;","synthetic":true,"types":[]}];
implementors["stronghold_utils"] = [{"text":"impl&lt;Msg&gt; Freeze for AskActor&lt;Msg&gt;","synthetic":true,"types":[]}];
implementors["vault"] = [{"text":"impl Freeze for Base64","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Key&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionType","synthetic":true,"types":[]},{"text":"impl Freeze for Transaction","synthetic":true,"types":[]},{"text":"impl Freeze for UntypedTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for DataTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for RevocationTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for InitTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for SealedTransaction","synthetic":true,"types":[]},{"text":"impl Freeze for SealedBlob","synthetic":true,"types":[]},{"text":"impl Freeze for RecordHint","synthetic":true,"types":[]},{"text":"impl Freeze for Val","synthetic":true,"types":[]},{"text":"impl Freeze for ChainId","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionId","synthetic":true,"types":[]},{"text":"impl Freeze for BlobId","synthetic":true,"types":[]},{"text":"impl Freeze for Chain","synthetic":true,"types":[]},{"text":"impl Freeze for Kind","synthetic":true,"types":[]},{"text":"impl Freeze for ReadRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ReadResult","synthetic":true,"types":[]},{"text":"impl Freeze for WriteRequest","synthetic":true,"types":[]},{"text":"impl Freeze for DeleteRequest","synthetic":true,"types":[]},{"text":"impl Freeze for RecordId","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; Freeze for DBView&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, P&gt; Freeze for DBReader&lt;'a, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PreparedRead","synthetic":true,"types":[]},{"text":"impl&lt;'a, P&gt; Freeze for DBWriter&lt;'a, P&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()