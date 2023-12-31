import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeafSparkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeafSparkW100'

      short_name='LeafSpark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550.932-132Q503-132 455.5-150.5T365-204l-67 68q-5 5-10 5t-10-5q-5-5-5-10t5-10l68-67q-36-43-54-90.5t-18-95.706Q274-528 356.667-607 439.334-686 551-686h217q24.75 0 42.375 17.625T828-626v217q0 53-20.5 103.5T747-213q-42 40-92.5 60.5T550.932-132ZM247-558q0-64.583 45.208-109.792Q337.417-713 402-713q-64.583 0-109.792-45.208Q247-803.417 247-868q0 64.583-45.208 109.792Q156.583-713 92-713q64.583 0 109.792 45.208Q247-622.583 247-558Zm303.793 398Q601-160 646.5-179q45.5-19 80.5-54t54-80.618q19-45.617 19-95.382v-217q0-14-9-23t-23-9H551q-48.754 0-93.877 18T377-587q-36 35-55.5 81T302-408.773Q302-368 317-326q15 42 47 84l233-233q5-5 10-5t10 5q5 5 5 10t-5 10L384-222q42 32 84 47t82.793 15ZM551-409Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLeafSparkW100.displayName = 'AmauiIconMaterialLeafSparkW100';

export default IconMaterialLeafSparkW100;
