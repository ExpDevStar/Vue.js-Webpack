<template>
  <modal id="modal1" size="md">
    <div slot="modal-header">
      <h3>Connected</h3>
    </div>
    <div slot="modal-body">
      Websocket server connection established
    </div>
    <div slot="modal-footer">
      <button class="btn btn-primary" v-on:click="$broadcast('hide::modal', 'modal1')">
        OK
      </button>
    </div>
  </modal>
</template>

<script>
  import vuestrap from 'vuestrap-base-components'
  export default {
    components: {
      'modal': vuestrap.modal
    },
    sockets: {
      connect: function () {
        console.log('socket connected')
        this.$broadcast('show::modal', 'modal1')
      },
      customEmit: function () {
        console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
      }
    }
  }
</script>

