import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadinessScore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadinessScore'

      short_name='ReadinessScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M295-119q-36-1-68.5-18.5T165-189q-40-48-62.5-114.5T80-440q0-83 31.5-156T197-723q54-54 127-85.5T480-840q83 0 156 32t127 87q54 55 85.5 129T880-433q0 77-25 144t-71 113q-28 28-59 42.5T662-119q-18 0-36-4.5T590-137l-56-28q-12-6-25.5-9t-28.5-3q-15 0-28.5 3t-25.5 9l-56 28q-19 10-37.5 14.5T295-119Zm2-80q9 0 18.5-2t18.5-7l56-28q21-11 43.5-16t45.5-5q23 0 46 5t44 16l57 28q9 5 18 7t18 2q19 0 36-10t34-30q32-38 50-91t18-109q0-134-93-227.5T480-760q-134 0-227 94t-93 228q0 57 18.5 111t51.5 91q17 20 33 28.5t34 8.5Zm183-281Zm-195 40q-20 0-31.5-17.5T247-496q20-81 84.5-132.5T480-680q83 0 148 51.5T713-496q5 21-6.5 38.5T675-440q-16 0-26-12t-15-28q-5-16-12-30.5T604-539l-92 123q-9 13-24.5 15t-29.5-6q-15-9-18-26t8-31l93-124q-14-6-29.5-9t-31.5-3q-55 0-97.5 33.5T326-480q-5 16-15 28t-26 12Z"/>
    </Icon>
  );
});

IconMaterialReadinessScore.displayName = 'AmauiIconMaterialReadinessScore';

export default IconMaterialReadinessScore;
