'use server';

import testQueue from '@/queue/testQueue'

export default async function submit(){
  try {
    await testQueue.createJob(Date.now()).save();

    return "Success"
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}