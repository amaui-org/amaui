import { style } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {
    borderRadius: 'inherit',
    overflow: 'hidden',
    display: 'inline-block',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%'
  },
  wave: {

  }
}));

// Either version: 'simple' | 'wave'
// and border true

// and background version: 'simple' | 'wave' | 'pulse'
// and with in props,

export default function Interaction(props: any) {
  const { children } = props;

  const { classes } = useStyle(props);

  const add = event => {
    console.log(1, event);
  };

  const remove = event => {
    console.log(11, event);
  };

  return (
    <span
      className={classes.root}

      onMouseDown={add}
      onMouseUp={remove}
    >
      {children}
    </span>
  );
}
