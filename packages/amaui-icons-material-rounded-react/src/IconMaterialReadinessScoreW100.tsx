import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReadinessScoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReadinessScoreW100'

      short_name='ReadinessScore'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M296-171q-25-1-47.5-13T206-219q-35-39-54.5-97T132-437q0-73 27-137t74.5-111.5q47.5-47.5 111-75T480-788q72 0 135.5 27.5T726-686q47 47 74.5 110.5T828-440q0 61-19.5 118.5T755-222q-22 26-44.5 38.5T662-171q-13 0-25-3t-24-9l-56-28q-18-9-38-13.5t-40-4.5q-21 0-40.5 4.5T402-211l-55 28q-13 7-25 10t-26 2Zm1-28q9 0 18.5-2t18.5-7l56-28q21-11 43.5-16t45.5-5q23 0 46 5t44 16l57 28q9 5 18 7t18 2q19 0 36.5-10t34.5-30q32-38 49.5-91T800-440q0-134-93-227t-227-93q-134 0-227 94t-93 228q0 57 19 111t51 91q17 20 33 28.5t34 8.5Zm183-281Zm-188-13q-7 0-11-6.5t-1-14.5q23-63 78-101.5T480-654q67 0 121.5 38.5T679-514q3 8-.5 14.5T667-493q-5 0-9-3.5t-6-8.5q-6-21-18.5-39T604-577L491-432q-4 5-9 6t-10-2q-5-3-6.5-8.5T468-447l114-147q-23-15-49-23.5t-53-8.5q-59 0-107 33t-67 88q-2 5-5.5 8.5T292-493Z"/>
    </Icon>
  );
});

IconMaterialReadinessScoreW100.displayName = 'AmauiIconMaterialReadinessScoreW100';

export default IconMaterialReadinessScoreW100;
