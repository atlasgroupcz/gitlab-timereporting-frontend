import * as React from 'react';
import { default as ReactSelect } from 'react-select';

import {
    ClearIndicator,
    Control,
    CrossIcon,
    DropdownIndicator,
    IndicatorsContainer,
    // Input,
    Menu,
    MenuList,
    NoOptionsMessage,
    // Placeholder,
    SelectContainer,
    SingleValue,
    // SingleValue,
    ValueContainer,
} from './UserSelect.style';
import { OptionType } from './UserSelect.utils';
import { Size, Icon, OptionProps } from 'react-atlantic';
import { Option as OptionComponent } from 'react-atlantic/lib/components/Select/components/Option';

export interface SelectProps {
    onChange?: (value?: any) => void;
    value?: any;
    defaultValue?: any;
    options?: OptionType[];
    isDisabled?: boolean;
    size?: Size;
    className?: string;
    autoFocus?: boolean;
}

export const Select: React.FC<React.PropsWithChildren<SelectProps>> & {
    Option: React.FC<OptionProps>;
} = (props: React.PropsWithChildren<SelectProps>) => {
    const {
        isDisabled,
        options,
        size,
        defaultValue,
        autoFocus,
        value,
        onChange,
    } = props;

    const name = (value?.label as any)?.props?.children?.[0].props.children;
    return (
        <ReactSelect
            value={name}
            size={size}
            isDisabled={isDisabled}
            options={options}
            placeholder={'Vyberte uživatele'}
            isSearchable
            onChange={onChange}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            backspaceRemovesValue
            filterOption={(val, search) => {
                const relevantVal = (val?.label as any)?.props?.children;

                const name = relevantVal?.[0].props.children.toLowerCase() as string;
                const email = relevantVal?.[1].props.children.toLowerCase() as string;

                return (
                    name.includes(search.toLowerCase()) ||
                    email.includes(search.toLowerCase())
                );
            }}
            components={{
                Option: (props) => <OptionComponent {...props} size={size} />,
                NoOptionsMessage: ({ children, innerProps }) => (
                    <NoOptionsMessage {...innerProps}>
                        {children}
                    </NoOptionsMessage>
                ),
                ClearIndicator: ({ innerProps }) => (
                    <ClearIndicator {...innerProps}>
                        <Icon name={'clear'} />
                    </ClearIndicator>
                ),
                Control: (props: any) => (
                    <Control
                        {...props.innerProps}
                        isMenuOpened={props.menuIsOpen}
                        isMulti={props.isMulti}
                        hasValue={props.hasValue}
                        isFullWidth={props.isFullWidth}
                        size={size}
                        isDisabled={props.isDisabled}
                    >
                        {props.children}
                    </Control>
                ),
                CrossIcon: ({ children, innerProps }) => (
                    <CrossIcon {...innerProps}>
                        <div>{children}</div>
                    </CrossIcon>
                ),
                DownChevron: ({ children, innerProps }) => (
                    <div {...innerProps}>
                        {children}
                        <Icon name={'arrowDown'} />
                    </div>
                ),
                DropdownIndicator: ({ innerProps, selectProps }) => (
                    <DropdownIndicator isDisabled={isDisabled} {...innerProps}>
                        {selectProps.menuIsOpen && <Icon name={'arrowUp'} />}
                        {!selectProps.menuIsOpen && <Icon name={'arrowDown'} />}
                    </DropdownIndicator>
                ),
                Group: ({ children }) => <div>{children}</div>,
                GroupHeading: ({ children, innerProps }) => (
                    <div {...innerProps}>{children}</div>
                ),
                Menu: ({ children, innerProps }) => (
                    <Menu {...innerProps}>{children}</Menu>
                ),
                MenuList: ({ children }) => <MenuList>{children}</MenuList>,
                IndicatorsContainer: ({ children }) => (
                    <IndicatorsContainer size={size}>
                        {children}
                    </IndicatorsContainer>
                ),
                // Input: (props) => (
                //     <div>
                //         <Input placeholder={`Začněte psát`} {...props} />
                //     </div>
                // ),

                MenuPortal: ({ children }) => <div>{children}</div>,

                // Placeholder: ({ children, innerProps }) => (
                //     <Placeholder {...innerProps}>{children}</Placeholder>
                // ),
                SelectContainer: ({ children, innerProps }) => (
                    <SelectContainer size={size} {...innerProps}>
                        {children}
                    </SelectContainer>
                ),
                SingleValue: ({ children, innerProps }) => (
                    <SingleValue size={size} {...innerProps}>
                        {children}
                    </SingleValue>
                ),
                ValueContainer: ({ children, isMulti }) => (
                    <ValueContainer isMulti={isMulti} size={size}>
                        {children}
                    </ValueContainer>
                ),
            }}
        />
    );
};

Select.defaultProps = {
    // isMulti: false,
    // isFullWidth: false,
    size: 'medium',
};

Select.displayName = `Select`;

Select.Option = OptionComponent;

// TODO: OptionGroup
