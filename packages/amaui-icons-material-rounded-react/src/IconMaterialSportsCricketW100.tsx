import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketW100'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.1 14 12 16.1q-.225.225-.5.225T11 16.1L3.2 8.3q-.225-.225-.25-.475-.025-.25.2-.475l2.2-2.2q.225-.225.45-.225t.45.225l7.875 7.875q.225.225.213.487-.013.263-.238.488Zm-2.6 1.6 2.1-2.1-7.8-7.8-2.1 2.1Zm6.85 5.25-4.1-4.1.5-.5 4.125 4.125q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm.15-12.8q-1.05 0-1.8-.75t-.75-1.8q0-1.05.75-1.8t1.8-.75q1.05 0 1.8.75t.75 1.8q0 1.05-.75 1.8t-1.8.75Zm0-.7q.775 0 1.312-.538.538-.537.538-1.312t-.538-1.313q-.537-.537-1.312-.537t-1.312.537q-.538.538-.538 1.313 0 .775.538 1.312.537.538 1.312.538Zm0-1.85Zm-9.85 5.15Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketW100.displayName = 'AmauiIconMaterialSportsCricketW100';

export default IconMaterialSportsCricketW100;
