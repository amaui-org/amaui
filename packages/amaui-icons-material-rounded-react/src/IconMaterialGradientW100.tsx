import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100'

      short_name='Gradient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13v-2h2v2Zm-2 2v-2h2v2Zm4 0v-2h2v2Zm2-2v-2h2v2Zm-8 0v-2h2v2Zm-1.2 6.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM7 19h2v-2H7Zm4 0h2v-2h-2Zm4 0h2v-2h-2ZM5 17h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8V13h2v2H5Zm.8 2H5V5h.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialGradientW100.displayName = 'AmauiIconMaterialGradientW100';

export default IconMaterialGradientW100;
