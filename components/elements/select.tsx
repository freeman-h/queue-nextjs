import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Select = (props) => {
  return (
    <div>
      <Listbox value={props.value} onChange={props.onChange}>
        {({ open }) => (
          <div>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {props.label}
            </Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white sm:py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm">
                <span className="flex items-center">
                  <div
                    className={`h-6 w-6 flex-shrink-0 rounded-full ${props.value.color} text-center text-white`}
                  >
                    <h4 className="mt-0.5">{props.value.id}</h4>
                  </div>
                  <span className="ml-3 block truncate">
                    {props.value.status}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        classNames(
                          active
                            ? `text-white ${option.color} rounded-lg m-1`
                            : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9 m-1'
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <div className="h-6 w-6 flex-shrink-0 rounded-full mt-1">
                              {option.id}
                            </div>
                            <span
                              className={classNames(
                                props.value ? 'font-normal' : 'font-normal',
                                'ml-3 block truncate'
                              )}
                            >
                              {option.status}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  );
};
export default Select;
