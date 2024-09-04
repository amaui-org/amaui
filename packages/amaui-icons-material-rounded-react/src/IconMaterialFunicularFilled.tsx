import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunicularFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunicularFilled'

      short_name='Funicular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M89-53q-18 5-33.5-6.5T40-91q0-13 7.5-23T68-128l172-47v-105h-80q-17 0-28.5-11.5T120-320v-400q-17 0-28.5-11.5T80-760q0-17 11.5-28.5T120-800h80v-40q0-17 11.5-28.5T240-880h480q17 0 28.5 11.5T760-840v40h80q17 0 28.5 11.5T880-760q0 17-11.5 28.5T840-720v320q0 17-11.5 28.5T800-360h-80v55l151-42q18-5 33.5 6.5T920-309q0 13-7.5 23T892-272L89-53Zm271-154 240-66v-87h-80v40q0 17-11.5 28.5T480-280H360v73ZM200-480h240v-240H200v240Zm320-80h240v-160H520v160Z"/>
    </Icon>
  );
});

IconMaterialFunicularFilled.displayName = 'AmauiIconMaterialFunicularFilled';

export default IconMaterialFunicularFilled;
