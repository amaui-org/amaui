import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRegularExpression = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RegularExpression'

      short_name='RegularExpression'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 574q0-69 22.5-133.5T169 322q11-13 27.5-14t28.5 11q12 12 12.5 28.5T227 378q-33 42-50 92t-17 104q0 54 18 104t50 92q11 14 10.5 30T226 828q-12 12-28.5 11.5T170 826q-43-54-66.5-118.5T80 574Zm300 242q-25 0-42.5-17.5T320 756q0-25 17.5-42.5T380 696q25 0 42.5 17.5T440 756q0 25-17.5 42.5T380 816Zm179-200q-17 0-28.5-11.5T519 576v-31l-26 16q-14 8-30.5 3.5T438 546q-8-14-3.5-30.5T453 491l26-15-27-15q-14-8-18-24.5t4-30.5q8-15 24.5-18.5T493 392l26 15v-31q0-17 11.5-28.5T559 336q17 0 28.5 11.5T599 376v31l26-16q14-8 30.5-3.5T680 406q8 14 3.5 30.5T665 461l-26 15 27 15q14 8 18 24.5t-4 30.5q-8 15-24.5 18.5T625 560l-26-15v31q0 17-11.5 28.5T559 616Zm321-42q0 69-22.5 133.5T791 826q-11 13-27.5 13.5T735 828q-12-12-12.5-28t10.5-30q33-42 50-92t17-104q0-54-18-104t-50-92q-11-14-10-30.5t13-28.5q12-12 28-11t27 14q43 54 66.5 118.5T880 574Z"/>
    </Icon>
  );
});

IconMaterialRegularExpression.displayName = 'AmauiIconMaterialRegularExpression';

export default IconMaterialRegularExpression;
