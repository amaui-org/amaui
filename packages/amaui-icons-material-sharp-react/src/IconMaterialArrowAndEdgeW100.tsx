import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowAndEdgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowAndEdgeW100'

      short_name='ArrowAndEdge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-171 357-294l19-20 90 90v-212q0-38-27-65t-65-27H104v-260h28v232h242q35 0 63 17.5t43 46.5q15-29 43-46.5t63-17.5h242v-232h28v260H586q-38 0-65 27t-27 65v211l90-89 19 20-123 123Z"/>
    </Icon>
  );
});

IconMaterialArrowAndEdgeW100.displayName = 'AmauiIconMaterialArrowAndEdgeW100';

export default IconMaterialArrowAndEdgeW100;
