import { model, Schema } from 'mongoose';
import { LogInterface } from './types';

export const LogObject = {
  level: {type: String},
  message: {type: String},
  resourceId: {type: String},
  timestamp: {type: Date},
  traceId: {type: String},
  spanId: {type: String},
  commit: {type: String},
  metadata: {
    parentResourceId: {type: String},
  },
};

const LogSchema = new Schema<LogInterface>(LogObject, {
  timestamps: true,
});

LogSchema.index({ level: 1 });
LogSchema.index({ resourceId: 1 });
LogSchema.index({ traceId: 1 });
LogSchema.index({ spanId: 1 });
LogSchema.index({ commit: 1 });

const LogModel = model('Logs', LogSchema);

export default LogModel;
