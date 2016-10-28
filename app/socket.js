import io from 'socket.io-client';
import { API_HOST } from 'config';

const socket = io(API_HOST);

/**
 * Example usage:
 * socket.emit('spotify', 'play-pause');
 */

export default socket;
