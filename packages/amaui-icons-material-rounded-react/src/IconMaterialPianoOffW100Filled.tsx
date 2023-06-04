import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPianoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PianoOffW100Filled'

      short_name='PianoOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.6 20.6-.95-.95q-.125.025-.225.038-.1.012-.225.012H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.125.012-.225.013-.1.038-.225L3.4 4.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm.1-3.7-.7-.7V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-1.725v8.3q0 .075-.013.162-.012.088-.037.163l-3.15-3.15V5h-2.55v2.925L7.1 4.3h11.1q.65 0 1.075.425.425.425.425 1.075ZM5.8 19h2.975v-4.9h-.45q-.35 0-.575-.225-.225-.225-.225-.575V8.525L5 6v12.2q0 .35.225.575Q5.45 19 5.8 19Zm3.675 0h5.05v-3.475l-3.8-3.8q0 .425.038 1.4.037.975-.838.975h-.45Zm5.75 0H18l-2.775-2.775Z"/>
    </Icon>
  );
});

IconMaterialPianoOffW100Filled.displayName = 'AmauiIconMaterialPianoOffW100Filled';

export default IconMaterialPianoOffW100Filled;
