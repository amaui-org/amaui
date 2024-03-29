import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkIntelligenceHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkIntelligenceHistory'

      short_name='NetworkIntelligenceHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-248v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l60 60q6 6 14 6t14-6q6-6 6-14t-6-14l-60-60ZM500-413v-147h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l59 103q-26-11-54-17t-57-6q-67 0-124.5 29T500-413Zm-80 253h-97q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v56q-10 24-15 50t-5 54q0 17 1.5 34t6.5 34q-5 5-12.5 8.5T420-160ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialNetworkIntelligenceHistory.displayName = 'AmauiIconMaterialNetworkIntelligenceHistory';

export default IconMaterialNetworkIntelligenceHistory;
