import { style } from '@amaui/style-react';

const useStyle = style(theme => ({
   root: {
      color: theme.palette.text?.default?.primary,
      fontSize: theme.palette.light ? 14 : 24
   }
}), { name: 'A' });

export default function A(props: any) {
   const { classes } = useStyle(props);

   return (
      <div
         className={classes.root}
      >
         a
      </div>
   );
}
