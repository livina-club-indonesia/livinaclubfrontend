import io from 'socket.io-client'
import feathers from '@feathersjs/client'
import rx from 'feathers-reactive/dist/feathers-reactive'

const socket = io('http://localhost:3030')
const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(
    rx({
      idField: 'id'
    })
  )

export default app
