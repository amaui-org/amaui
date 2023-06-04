import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineCurveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurveW100'

      short_name='LineCurve'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 896q0-116-44-218T556 500q-76-76-178-120t-218-44v-28q122 0 229 46t187 126q80 80 126 187t46 229h-28Z"/>
    </Icon>
  );
});

IconMaterialLineCurveW100.displayName = 'AmauiIconMaterialLineCurveW100';

export default IconMaterialLineCurveW100;
