import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestartAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestartAltW100'

      short_name='RestartAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 19.525q-2.325-.475-3.812-2.287Q5.3 15.425 5.3 13q0-1.225.463-2.363Q6.225 9.5 7.025 8.55q.1-.125.225-.125t.25.125q.1.1.1.237 0 .138-.1.263-.75.8-1.125 1.825T6 13q0 2.125 1.338 3.762 1.337 1.638 3.387 2.088.125.025.2.125.075.1.075.225 0 .175-.113.275-.112.1-.287.05Zm2.8.05q-.175.05-.287-.05-.113-.1-.113-.275 0-.125.075-.225t.2-.15Q15.3 18.3 16.65 16.7 18 15.1 18 13q0-2.5-1.75-4.25T12 7h-.8l1.5 1.5q.125.125.125.25T12.7 9q-.125.125-.25.125T12.2 9l-1.825-1.825q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L12.2 4.3q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-1.5 1.5h.8q2.8 0 4.75 1.95Q18.7 10.2 18.7 13q0 2.4-1.5 4.2-1.5 1.8-3.8 2.375Z"/>
    </Icon>
  );
});

IconMaterialRestartAltW100.displayName = 'AmauiIconMaterialRestartAltW100';

export default IconMaterialRestartAltW100;
