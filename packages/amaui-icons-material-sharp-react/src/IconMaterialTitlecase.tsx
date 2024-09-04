import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitlecase = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Titlecase'

      short_name='Titlecase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M344-250v-366H224v-64h308v64H412v366h-68Zm344 10q-44 0-69-25.5T594-336v-162h-54v-58h54v-87h66v87h74v58h-74v148q0 23 10.5 36t28.5 13q9 0 18.5-3.5T736-314v65q-10 5-22 7t-26 2Z"/>
    </Icon>
  );
});

IconMaterialTitlecase.displayName = 'AmauiIconMaterialTitlecase';

export default IconMaterialTitlecase;
