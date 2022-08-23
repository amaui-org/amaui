import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPackageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PackageRoundedW100'
      short_name='Package'

      {...props}
    >
      <path d="m10 10.5 1.5-.75q.25-.125.5-.125t.5.125l1.5.75V5h-4Zm-2.65 5.85q-.15 0-.25-.1T7 16q0-.15.1-.25t.25-.1h4.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM5 5V19 5Zm.8 14h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-3.5v6.05q0 .2-.175.313-.175.112-.375.012L12 10.3l-2.15 1.075q-.2.1-.375-.012-.175-.113-.175-.313V5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Z"/>
    </Icon>
  );
});

IconMaterialPackageRoundedW100.displayName = 'AmauiIconMaterialPackageRoundedW100';

export default IconMaterialPackageRoundedW100;
