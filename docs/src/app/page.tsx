'use client';

import { style } from '@amaui/style-react'

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'root' });

export default function Root(props: any) {
  const { classes } = useStyle(props);

  return (
    <div
      className={classes.root}
    >
      a
    </div>
  )
}
