import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsMotionModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsMotionModeW100Filled'

      short_name='SettingsMotionMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.05 20.875q-.825-.275-1.587-.687-.763-.413-1.413-.963V4.775q.65-.55 1.413-.963.762-.412 1.587-.687Zm-3.7-2.3q-.65-.65-1.15-1.412-.5-.763-.85-1.613v-7.1q.35-.85.85-1.613.5-.762 1.15-1.412Zm4.4-1.15v-14.5q.55-.125 1.113-.2.562-.075 1.137-.075.45 0 .888.05.437.05.862.125v9.3q-1.675.575-2.775 2.012-1.1 1.438-1.225 3.288Zm11.2-2.725q-.8-1.325-2.162-2.125-1.363-.8-3.013-.8-.35 0-.675.037-.325.038-.65.113v-8.95q3 .8 4.95 3.275 1.95 2.475 1.95 5.75 0 .725-.1 1.387-.1.663-.3 1.313Zm-5.525 6.675-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15l-.575-.45.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Z"/>
    </Icon>
  );
});

IconMaterialSettingsMotionModeW100Filled.displayName = 'AmauiIconMaterialSettingsMotionModeW100Filled';

export default IconMaterialSettingsMotionModeW100Filled;
