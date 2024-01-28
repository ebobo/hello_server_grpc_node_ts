import { ConnectRouter } from '@connectrpc/connect';
import { GreeterService } from '../lib/hello_connect.js';
import { HelloRequest } from '../lib/hello_pb.js';

// implements rpc SayHello service
export default (router: ConnectRouter) =>
  // registers connectrpc.eliza.v1.ElizaService
  router.service(GreeterService, {
    // implements rpc SayHello
    async sayHello(req: HelloRequest) {
      return {
        message: `Hello: ${req.name} from ConnectRPC at 9088 !`,
      };
    },
  });
