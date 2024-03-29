import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEnd'

      short_name='CallEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8q2.95 0 5.812 1.188 2.863 1.187 5.088 3.562.3.3.3.7 0 .4-.3.7l-2.3 2.25q-.275.275-.637.3-.363.025-.663-.2L16 14v-3.35q-.95-.3-1.95-.475T12 10q-1.05 0-2.05.175-1 .175-1.95.475V14l-3.3 2.5q-.3.225-.662.2-.363-.025-.638-.3l-2.3-2.25q-.3-.3-.3-.7 0-.4.3-.7 2.2-2.375 5.075-3.562Q9.05 8 12 8Zm-7.8 6.4L6 13v-1.55q-.725.375-1.4.862-.675.488-1.4 1.088Zm15.6 0 1-.95q-.725-.65-1.4-1.125-.675-.475-1.4-.825V13ZM18 11.5Zm-12-.05Z"/>
    </Icon>
  );
});

IconMaterialCallEnd.displayName = 'AmauiIconMaterialCallEnd';

export default IconMaterialCallEnd;
