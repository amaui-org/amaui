import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildFriendlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildFriendlyFilled'

      short_name='ChildFriendly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 22q-.65 0-1.075-.425Q7 21.15 7 20.5q0-.65.425-1.075Q7.85 19 8.5 19q.65 0 1.075.425Q10 19.85 10 20.5q0 .65-.425 1.075Q9.15 22 8.5 22Zm11 0q-.65 0-1.075-.425Q18 21.15 18 20.5q0-.65.425-1.075Q18.85 19 19.5 19q.65 0 1.075.425Q21 19.85 21 20.5q0 .65-.425 1.075Q20.15 22 19.5 22Zm-6-14.4L9.6 2.9q.9-.45 1.95-.675Q12.6 2 13.8 2q.875 0 1.688.162.812.163 1.537.488.55.25.588.775.037.525-.438.95ZM12 18q-2.075 0-3.537-1.462Q7 15.075 7 13V5.3l-.5-.6q-.35-.425-.587-.563Q5.675 4 5.4 4q-.425 0-.75.237-.325.238-.5.588-.15.325-.362.5-.213.175-.488.175-.575 0-.925-.4-.35-.4-.15-.875.375-.975 1.225-1.6Q4.3 2 5.4 2q.75 0 1.375.35t1.275 1.1l10.7 12.9q.425.5.163 1.075Q18.65 18 18 18Z"/>
    </Icon>
  );
});

IconMaterialChildFriendlyFilled.displayName = 'AmauiIconMaterialChildFriendlyFilled';

export default IconMaterialChildFriendlyFilled;
