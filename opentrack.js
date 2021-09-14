const OpenTrack = require('opentrack')
const client = new OpenTrack.Client('10.128.200.231', 4243)

// Called every time data is sent
client.onUpdate((transform, delta) => {
	// The modified transform will be sent on the next update
  transform.rotation.x = transform.rx
  transform.rotation.y = transform.ry
	transform.rotation.z = transform.rz
  
})
