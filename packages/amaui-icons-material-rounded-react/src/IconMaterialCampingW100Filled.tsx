import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100Filled'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 20.6v-2.35q0-.25.075-.475.075-.225.225-.425l7.975-10.725-.725-.975q-.05-.05-.062-.125-.013-.075 0-.138.012-.062.05-.125.037-.062.087-.112.125-.1.25-.075.125.025.225.15l.6.825.6-.825q.1-.125.238-.15.137-.025.262.075t.15.237q.025.138-.075.263l-.725.975L20.4 17.35q.15.2.225.425.075.225.075.475v2.35q0 .325-.212.538-.213.212-.538.212H4.05q-.325 0-.537-.212-.213-.213-.213-.538Zm4.475.05h8.45L12 14.725Z"/>
    </Icon>
  );
});

IconMaterialCampingW100Filled.displayName = 'AmauiIconMaterialCampingW100Filled';

export default IconMaterialCampingW100Filled;
