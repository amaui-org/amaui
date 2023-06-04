import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationCityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationCityW100'

      short_name='LocationCity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 19.9q-.275 0-.487-.212-.213-.213-.213-.488V7.9q0-.275.213-.488.212-.212.487-.212h3.3V3.85q0-.075.013-.138.012-.062.05-.125l.075-.125q.037-.062.087-.112l1.6-1.525q.2-.225.525-.225t.525.225l1.6 1.525q.1.125.163.237.062.113.062.263v7.35h3.3q.275 0 .488.212.212.213.212.488v7.3q0 .275-.212.488-.213.212-.488.212Zm0-.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm4 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3V7.9h-3.3Zm0-4h3.3V3.9h-3.3Zm4 12h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Z"/>
    </Icon>
  );
});

IconMaterialLocationCityW100.displayName = 'AmauiIconMaterialLocationCityW100';

export default IconMaterialLocationCityW100;
