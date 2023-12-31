import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffW100'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M784-136 585-335 475-221q-5 5-10.5 7t-11.5 2H192q-6 0-11-2t-10-7l-39-39q-18-18-18.5-42t17.5-43l218-226-213-213q-4-4-4.5-9.5T136-804q5-5 10-5t10 5l648 648q4 4 4.5 9.5T804-136q-5 5-10 5t-10-5ZM192-240h262l111-115-197-197-217 225q-8 9-8 23.5t8 22.5l41 41Zm468-172-20-20 105-107q8-8 8-23t-8-23L592-738q-8-8-22.5-8t-22.5 9L443-629l-20-20 104-108q18-19 42-18.5t42 18.5l153 153q18 18 18.5 42.5T765-519L660-412ZM542-531Zm-75 77Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffW100.displayName = 'AmauiIconMaterialInkEraserOffW100';

export default IconMaterialInkEraserOffW100;
