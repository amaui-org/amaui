import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDonutSmall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmall'

      short_name='DonutSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.025 2.05q3.575.35 6.088 2.862Q21.625 7.425 21.975 11h-7.15q-.225-.65-.687-1.137-.463-.488-1.113-.713Zm2 2.55V8q.275.225.525.475.25.25.475.525h3.4q-.6-1.5-1.75-2.65t-2.65-1.75Zm-4-2.55v7.1q-.9.325-1.45 1.112-.55.788-.55 1.738t.55 1.712q.55.763 1.45 1.088v7.15q-3.85-.375-6.425-3.225Q2.025 15.875 2.025 12q0-3.875 2.575-6.725 2.575-2.85 6.425-3.225Zm-2 2.55q-2.275.875-3.637 2.9Q4.025 9.525 4.025 12t1.363 4.5q1.362 2.025 3.637 2.95V16q-.95-.725-1.475-1.762Q7.025 13.2 7.025 12t.525-2.238Q8.075 8.725 9.025 8Zm5.8 8.4h7.15q-.35 3.575-2.862 6.087Q16.6 21.6 13.025 21.95V14.8q.65-.225 1.113-.688.462-.462.687-1.112Zm1.2 2q-.2.275-.463.525-.262.25-.537.475v3.4q1.5-.6 2.65-1.75t1.75-2.65Zm-9-2.975Zm9-3.025Zm0 6Z"/>
    </Icon>
  );
});

IconMaterialDonutSmall.displayName = 'AmauiIconMaterialDonutSmall';

export default IconMaterialDonutSmall;
