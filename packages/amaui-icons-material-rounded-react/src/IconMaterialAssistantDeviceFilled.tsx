import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDeviceFilled'

      short_name='AssistantDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-66 0-113 47t-47 113q0 66 47 113t113 47q66 0 113-47t47-113q0-66-47-113t-113-47Zm0 240q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440Zm160 160q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280ZM160-160v-520q0-83 58.5-141.5T360-880h240q83 0 141.5 58.5T800-680v520q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160Zm120 0h400q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240H280q-17 0-28.5 11.5T240-200q0 17 11.5 28.5T280-160Z"/>
    </Icon>
  );
});

IconMaterialAssistantDeviceFilled.displayName = 'AmauiIconMaterialAssistantDeviceFilled';

export default IconMaterialAssistantDeviceFilled;
