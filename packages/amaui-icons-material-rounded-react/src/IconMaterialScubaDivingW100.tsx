import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScubaDivingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScubaDivingW100'

      short_name='ScubaDiving'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 14.85q-.65 0-1.125-.475T1.4 13.25q0-.65.475-1.125T3 11.65q.65 0 1.125.475T4.6 13.25q0 .65-.475 1.125T3 14.85Zm5.8-4.775q-.425.125-.837-.1-.413-.225-.538-.675-.125-.425.113-.838.237-.412.662-.537L11.625 6.9q.3-.1.588.063.287.162.362.462l.175.7q.075.3-.075.55-.15.25-.425.35Zm-5.2 11.8q-.125-.1-.15-.225-.025-.125.075-.25l2.325-3.125.825-4.625q.05-.425.325-.738.275-.312.7-.412l9.75-2.95 1.95-4.3 2.225-2.225q.1-.1.238-.1.137 0 .262.125.125.1.125.237 0 .138-.1.263l-2.1 2.2-1.6 3.95q-.075.2-.2.362-.125.163-.3.288l-4.05 2.925q-.1.075-.2.112-.1.038-.225.088l-5.825 1.85-1.225 3.35-2.35 3.125q-.1.125-.225.15-.125.025-.25-.075Z"/>
    </Icon>
  );
});

IconMaterialScubaDivingW100.displayName = 'AmauiIconMaterialScubaDivingW100';

export default IconMaterialScubaDivingW100;
