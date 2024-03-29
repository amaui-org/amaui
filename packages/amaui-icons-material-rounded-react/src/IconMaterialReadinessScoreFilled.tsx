import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadinessScoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadinessScoreFilled'

      short_name='ReadinessScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 32t127 87q54 55 85.5 129T880-433q0 77-25 144t-71 113q-28 28-59 42.5T662-119q-18 0-36-4.5T590-137l-56-28q-12-6-25.5-9t-28.5-3q-15 0-28.5 3t-25.5 9l-56 28q-19 10-37.5 14.5T295-119Zm-10-321q16 0 26-12t15-28q14-53 56.5-86.5T480-600q16 0 31.5 3t29.5 9l-93 124q-11 14-8 31t18 26q14 8 29.5 6t24.5-15l92-123q11 14 18 28.5t12 30.5q5 16 15 28t26 12q20 0 31.5-17.5T713-496q-20-81-85-132.5T480-680q-84 0-148.5 51.5T247-496q-5 21 6.5 38.5T285-440Z"/>
    </Icon>
  );
});

IconMaterialReadinessScoreFilled.displayName = 'AmauiIconMaterialReadinessScoreFilled';

export default IconMaterialReadinessScoreFilled;
