import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormsAddOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormsAddOnFilled'

      short_name='FormsAddOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20.975v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM3 18v-2h2v2Zm4 0v-2h4.075q-.075.525-.063 1 .013.475.088 1Zm-4-4v-2h2v2Zm4 0v-2h6.65q-.575.4-1.037.9-.463.5-.813 1.1Zm-4-4V8h2v2Zm4 0V8h12v2ZM3 6V4h2v2Zm4 0V4h12v2Z"/>
    </Icon>
  );
});

IconMaterialFormsAddOnFilled.displayName = 'AmauiIconMaterialFormsAddOnFilled';

export default IconMaterialFormsAddOnFilled;
